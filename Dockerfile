FROM ruby:2.7-alpine AS builder

RUN apk add --no-cache build-base gcc bash cmake
COPY / /site
WORKDIR /site

RUN gem install bundler jekyll
RUN bundle install
RUN bundle exec jekyll pagemaster --no-permalink about
RUN bundle exec jekyll build

FROM nginx:1.22.1

COPY --from=builder /site/_site /usr/share/nginx/html

EXPOSE 80
