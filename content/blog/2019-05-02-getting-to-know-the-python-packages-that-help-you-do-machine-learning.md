---
layout: post
title:  "Python for Machine Learning"
date:   2019-05-02
categories:
thumbnail: /images/featimage/may_2_2019.jpg
author: Chelsea
tags: ["Python", "Automation", "ML", "AI", "Open Source"]
---

**CIO LEVEL SUMMARY:**

- Machine Learning can be difficult to implement by hand, but packages in python like SciKit Learn, Keras, and Tensorflow create an environment where building ML models from logistic regression to Deep Networks is straightforward.

- **Scikit learn** is a package is a general machine learning library that implements basic ML algorithms, both supervised and unsupervised. It has clear and consistent syntax so that training models is similar between algorithms.

- Similarly, **Keras** is an open source Neural Network library that uses different frameworks (such as Tensorflow) to create an easy to use syntax for building custom Neural Networks. Keras allows you flexibility, without the technical cost of using Tensorflow directly.

- **Tensorflow** is a lower level machine learning library created and maintained by Google. It allows for incredibly customization and flexibility, but does have less opaque and more complex syntax that can have a steep learning curve.

## SCIKIT LEARN

Scikit-learn is an open source package for common machine learning
models. It's built on top of other popular python libraries such as
*numpy* (which implements multidimensional arrays) and *pandas* (which
introduces the data frame class). While everything you do using
scikit-learn will be done using python syntax, scikit-learn (sklearn for
short) takes advantage of C to speed things up under the hood.

Sklearn provides out of the box models for *most* of the common machine
learning algorithms such as k-means clustering, regularized regression
models, tree-based classifiers and support vector machines. But it also
includes many tools to help with data preprocessing and cross
validation.

The beauty of sklearn is its consistency. To create a model of any kind,
you first create a model object using the specific constructor for the
model you'd like to use. For logistic regression you'd use the
**linear\_model.LogisticRegression()** constructor to create a new
logistic regression model object. For a random forest you would use the
**ensemble.RandomForestClassifier()** constructor.

But once you have the model object defined, fitting and assessing your
model is very consistent, no matter the type.

To use data to fit your model, you simply use model.fit(). See the below
example to see how similar the syntax is for both models.

First we load in the necessary packages and data:

```python
from sklearn import datasets
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
import pandas as pd
from sklearn.model_selection import train_test_split

#load premade dataset
data = datasets.load_wine()
features = pd.DataFrame(data = data['data'], columns = data['feature_names'])
features['target'] = data['target']
features['class'] = features['target'].map(lambda ind: data['target_names'][ind])
```

Then we use the built in function **train\_test\_split()** to create a
training and testing set.

```python
#split data for validation
x_train,x_test,y_train,y_test = train_test_split(data['data'],data['target'], test_size = 0.3)
print("There are \n",len(x_train), "data points for training \n", len(x_test), "data points for testing")
```

Now the beautiful part. Notice the similarities in syntax between the
implementation of the Logistic Regression and Random Forest models.
They're almost identical!

```python
#LogisticRegression
mod1 = LogisticRegression()
mod1.fit(x_train,y_train)
score = mod1.score(x_test,y_test)
print("Logistic Regression (ACC):", score)

#RandomForestClassifier
mod2 = RandomForestClassifier()
mod2.fit(x_train,y_train)
score2 = mod2.score(x_test,y_test)
print("Random Forest (ACC):", score2)
```

And this holds true for all the models in sklearn. Once you learn a
handful of common functions like **.fit()**, **.predict()**, and
**.score()** you can apply them consistently to different types of
models.

Sklearn allows you to utilize dozens of different machine learning
models with both ease and speed. You can even create simple Feed Forward
neural networks using the **MLPClassifier()** class (MLP stands for
multilayer perceptron). Sklearn provides a clear and consistent user
experience, while still allowing you some freedom to tweak parameters
and customize your models.

Here's some common sklearn methods to help you train your sklearn
models:

- **fit()** takes in data and uses it to train the model you call it on.

- **predict()** takes a trained model and a set of inputs (these can either be seen, or unseen) and outputs the values predicted by the model.

- **score()** take in (usually unseen) test data, runs it through your model, and returns a measure of model performance based on how close the predictions were to the actual output.

## KERAS

You can access tensorflow backend through keras

But sometimes, you need a little more complexity or control when
building Neural Networks. This is where Keras comes in. Keras is a deep
learning library that allows users to build customizable Networks while
still maintaining approachable syntax.

The most basic type of network in Keras is the **Sequential** model. The
Sequential() class allows us to easily build stacks of layers to create
all kinds of neural networks. We can initialize a Sequential with a list
of one or more layers, or we can use the model.add() function to add
more layers to the stack. Once we compile our model, keras uses a
machine learning library like Tensorflow, Theano or CNTK to implement
all of the necessary model computation like tensor operations.

```python
from keras.models import Sequential
from keras.layers import Dense, Activation

model = Sequential(
[Dense(10, input_shape = 40),
Activation('relu'),
Dense(2),
Activation('softmax')]
)
```

```python
model = Sequential()
model.add(Dense(10, input_shape = 40))
model.add(Activation('relu'))
model.add(Dense(2))
model.add(Activation('softmax')
```

## Building a Model

Both blocks of code will result in the same model. Keras treats layers
(and as we'll soon see, other neural network features) a bit like Lego
pieces and allows you to build a customized model using these pieces.
This allows us to have a lot of flexibility when creating our model
structure. Let's take a look at some commonly used layers that we can
use.

- **Dense()** creates a new fully connected layer, meaning that the each input value is included in the calculation of each of the layer's output.
- **Activation()** applies an activation to the last output in the model. You can specify the type of activation function you want by passing a string like "relu" or "softmax" to the method.
- **Dropout()** randomly drops connection between node during each pass through the model. Using the rate argument, you can specify the proportion of input units to be dropped.
- **Conv*2*D()** and **Conv*3*D()** create 2D or 3D Convolutional layers for use in a convolutional NN. Convolutional layers use learned "filters" that condense and extract information from images (see HSI article on Convolutional Neural Networks for more information).
- **MaxPooling*2*D()** and **MaxPooling*3*D()** creates a Max pooling layer. In general, Pooling reduces the dimensions of (downsamples) images and usually follows convolutional layers. Max pooling will take the maximum value from an nxn window of entries in the matrix.
- **AveragePooling*2*D()** and **AveragePooling*3*D()** are similar to Max pooling, but it will take the average value of an nxn window of entries in the matrix.

## How to Compile

Once you've specified the layers that you'd like your network to have,
you need to give Keras a few pieces of information about how you want to
*train* your model. Let's look at three main arguments the **compile()**
function takes.

- **Loss** refers to the *loss function* that you want to minimize. When your model is doing well, it's loss will be low. For specific info see [https://keras.io/losses/](https://keras.io/losses/).
  - Binary Cross Entropy
  - Mean Square Error
- **Metrics** allow you to track the progress of your model as it trains. You can ask for things like *accuracy* (for categorical tasks) or *mean absolute error* (for continuous predictions).
- **Optimizer** allows you to specify the algorithm used to optimize your network (i.e. to minimize your loss function). Some popular ones include *SGD* which stands for stochastic gradient descent and *Adam* (short for adaptive moment estimation) which takes advantage of the second as well as the first moment of the gradient and is often quite effective compared to other algorithms.

## How to Fit

Now that we've specified the structure of our network as well as the
details of how it will be trained, we need to give the network some data
to learn from. In Keras, we do that using the **fit()** method. We feed
this method the data we want to use to train our model, as well as how
long we want to train our model (using the epoch argument) and then we
set our model off to learn!

Once our model is done training, we can use the model to make
predictions on unseen data using **model.predict()**, or we can further
evaluate different model metrics like accuracy using the metrics we
discussed in the Compile section.

For examples of fully implemented Keras models, see the HSI articles on
*Convolutional Neural Networks,* and *Feed-Forward Neural Networks*.

## TENSORFLOW

Often, most networks can be built using the Keras package. Despite how
much work Keras does for you, it still allows for model flexibility.
However, occasionally it can be necessary or useful to customize or
optimize your models even further. Keras is able to use multiple
backends to actually build the tensor calculations necessary to train a
network. Tensorflow is very commonly used, but is a standalone library
and can be accessed by itself using import tensorflow.

Tensorflow allows you to be hands-on with the computational elements of
your model. It also is incredibly fast, as the models you build are
eventually executed (at least in part) in C++. Tensorflow is so named,
because in building a model, you essentially create a pipeline through
which your data (which is, after all just a tensor) can *flow*. While
Tensorflow does a lot of work for you behind the scenes so that you can
use your time to build beautiful models instead of getting bogged down
in the details of implementation, it is still far less simple and
accessible than Keras. Often, developers will choose to use Keras when
possible since it gives you many of the advantages of Tensorflow (like
speed), while allowing for much simpler syntax.

## CONCLUSION

Python has a very well developed and easily accessible set of tools that
can help you build all kinds of Machine Learning models; from simpler
models in **scikitlearn**, to highly customizable networks in
**Tensorflow**. Each tool has its own strengths and weaknesses, but
together, they provide almost limitless access to any kind of Machine
Learning model you could need to deploy.
