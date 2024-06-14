---
layout: post
title: "Improving Security Using Sigstore for Non-repudiation of Artifacts"
short_title: "Securing the Software Supply Chain"
date: 2023-04-27
categories:
featimg: /assets/images/featimage/supply-chain-security-featured-image-raft-website.png
bgimg: /assets/images/bgimg/securing-software-supply-chain-bkgrnd-image.png
author: Chad M. Crowell
---

## Overview
I recently visited a conference in Amsterdam called "Cloud Native Con + Kubecon EU 2023" where I attended a workshop titled _"Securing your Software Supply Chain"_. This workshop provided an overview of what it takes to secure a software supply chain with hands-on labs to demonstrate various techniques. These techniques included adding SBOMs, attestations, digital signatures and identity management to your software delivery pipelines.

[Sigstore](https://www.sigstore.dev/) was a focus of the workshop to provide and increase in security through tamper prevention, integrity verification, and non-repudiation of artifacts. In addition, applying keyless signing (one of the ways sigstore automates keys) via OIDC logins applying to supply chain security frameworks such as SLSA.

Leading the workshop were [Marc Boorshtein](https://twitter.com/mlbiam) who uses a lot of the lessons from his book [Kubernetes and Docker - An Enterprise Guide](https://a.co/d/43DvLga) in this workshop, and [John Osborne](https://twitter.com/CloudLvlMidnite) at [Chainguard](https://www.chainguard.dev/). 

Supply chain security is a top priority for any business delivering software. The process of securing the software supply chain allows companies to ensure the integrity and security of the software and components they use. It's all about making sure that the things we rely on, like apps, libraries, and firmware, haven't been tampered with or compromised in any way during their journey from development to deployment.

## Sigstore
Sigstore was developed by the Linux Foundation to provide secure software update distribution and verification for open source projects. It does this by using cryptographic signatures and a public transparency log. When software or components are signed using Sigstore, it means that a trusted entity has vouched for their authenticity.

This verification process ensures that the software you're using hasn't been tampered with. Sigstore relies on a public key infrastructure (PKI) and a transparency log. First, the software author generates a cryptographic key pair (public and a private key). The private key is secured and used by the author to digitally sign their software, while the public key is shared, allowing anyone to check the authenticity of the signed software. 

The transparency log is where all the signed software and their corresponding signatures are stored. It acts as a tamper-proof record, allowing anyone to verify the authenticity of a software package by cross-referencing it with the log. This way, we can detect any attempts to introduce malicious or unauthorized changes along the supply chain. 

Sigstore even provides an easy-to-use command-line tool called "cosign" which allows you to sign and verify software packages easily. With cosign, you can ensure that the software you're working with hasn't been compromised and that it's given the official stamp of approval by the author.

## Non-repudiation
Using Sigstore, you can provide Non-repudiation of software artifacts. Non-repudiation ensures that a party cannot deny their involvement in a software transaction or message exchange. Via Sigstore, cryptographic techniques, digital signatures, and PKI are used to provide evidence of the software's integrity and authenticity.

When a software component is signed, it generates a key pair (public and private key). Again, The private key is secured, and the public key is shared publicly. The signing entity uses the private key to generate a digital signature that is attached to the software package. This digital signature serves as proof that the software has not been tampered with and that it has been signed by the trusted entity.

Upon receiving the software component, recipients can verify the authenticity and integrity of the package using the corresponding public key. By comparing the digital signature with the received software, recipients can ensure that the package hasn't been tampered with during transit or during the software supply chain process. This verification process provides non-repudiation, as it prevents the software originator from denying their involvement in the software creation or any potential tampering that may have occurred during the supply chain process.

Non-repudiation mechanisms, such as Sigstore are essential in maintaining trust and security within the software supply chain. They provide evidence of the integrity and origin of software components, ensuring the accountability of all parties involved in the supply chain process.

## The Workshop
I'll provide a brief overview of the workshop from which I attended.

**Installing Sigstore:**
Sigstore provides a command-line interface (CLI) that you can use to interact with the service. You can find the installation instructions for your specific operating system on the [Sigstore documentation](https://docs.sigstore.dev/).

**Generate A Key Pair:**
To sign software artifacts, you'll need a key pair consisting of a private key and a corresponding public key. Generate this key pair using the Sigstore CLI by running the following command:

```bash
sigstore key generate
```

This command will create your private and public keys, which you'll use for signing and verifying artifacts, respectively.

**Sign Your Software Artifact:**
Now, let's sign your example software artifact. Assuming you have your artifact ready, use the following command to sign it:

```bash
sigstore sign <PATH_TO_ARTIFACT> --key <PATH_TO_PRIVATE_KEY>
Replace <PATH_TO_ARTIFACT> with the file path to your software artifact and <PATH_TO_PRIVATE_KEY> with the file path to your private key.
```

Sigstore will generate a digital signature for your artifact using your private key. This signature ensures the integrity and authenticity of your artifact.

**Verify the Signature:**
To verify the signature and ensure the integrity of the software artifact, run the following command:

```bash
sigstore verify <PATH_TO_SIGNED_ARTIFACT> --key <PATH_TO_PUBLIC_KEY>
Replace <PATH_TO_SIGNED_ARTIFACT> with the file path to the signed artifact and <PATH_TO_PUBLIC_KEY> with the file path to the corresponding public key.
```

Sigstore will compare the signature with the artifact and the public key. If everything checks out, you can be confident that your software artifact is authentic and hasn't been tampered with.

**Public Transparency Log:**
Sigstore maintains a public transparency log, which is a publicly auditable record of signed artifacts. You can explore this log to gain additional assurance and transparency in the software supply chain.

## Summary
In summary, Sigstore provides non-repudiation of software artifacts by leveraging digital signatures, cryptographic techniques, and a public transparency log. The digital signature, generated using the signer's private key, serves as proof of origin and integrity, while the public transparency log provides a tamper-evident record for audit-ability and accountability.

## Additional Resources

- [Simplifying Code Signing for Open Source Ecosystems](https://openssf.org/blog/2023/11/21/sigstore-simplifying-code-signing-for-open-source-ecosystems/)
- [Sigstore Documentation](https://docs.sigstore.dev/)
- [Sigstore: An open answer to software supply chain trust and security. Red Hat Blog.](https://www.redhat.com/en/blog/sigstore-open-answer-software-supply-chain-trust-and-security)
