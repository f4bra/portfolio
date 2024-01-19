---
title: "Deploy Astro app using Amazon SST"
heroImage: "/images/sst.webp"
pubDate: "Jul 08 2022"
description: "Learn how you can deploy your Astro app or landing super easy and cheap with Amazon SST"
category: "Web"
---

# Deploying a Next.js App Using AWS Service Stacks (SST)

## Introduction

Serverless applications have gained significant popularity in recent years for their scalability, cost-efficiency, and ease of deployment. If you're a Next.js developer looking to deploy your application on AWS, the Serverless Stack Framework (SST) is a powerful tool that simplifies the process. In this blog post, we'll guide you through the steps to deploy a Next.js app using AWS SST.

## What is AWS SST?

AWS Service Stack (SST) is an open-source framework for building serverless applications on AWS. It simplifies the development and deployment process by providing a higher-level abstraction and encouraging best practices for serverless application architecture. SST works well with a variety of AWS services like Lambda, API Gateway, DynamoDB, and more, making it a great choice for deploying Next.js apps.

## Prerequisites

Before we dive into deploying your Next.js app, you'll need the following prerequisites:

1. **An AWS account:** You'll need an AWS account to create and manage your serverless resources.

2. **Node.js:** Ensure you have Node.js installed on your local machine.

3. **AWS CLI:** Install the AWS Command Line Interface and configure it with your AWS credentials.

4. **Next.js App:** Have a Next.js app ready to deploy. You can create a new one or use an existing project.

## Step 1: Set Up Your Next.js App

If you haven't already, make sure your Next.js app is complete and ready for deployment. You should have a working app with all necessary dependencies.

## Step 2: Install and Configure AWS SST

To get started, you need to install SST globally using npm:

npm install -g serverless-stack

This command sets up the initial project structure and configurations.

## Step 3: Create SST App Stack

Now that you've initialized your project, it's time to create your SST app stack. This step involves setting up your project and making choices such as the AWS region and the deployment bucket. Run the following command to create your app stack:

bashCopy code

`sst app add`

SST will guide you through the configuration process.

## Step 4: Create an API Stack

---

Next.js apps typically require an API for interactions. To create the necessary API stack, use the following command:

bashCopy code

`sst api add`

This command automates the setup of an API Gateway and AWS Lambda functions to serve as your API endpoints.

## Step 5: Deploy Your App

---

With your app and API stack configured, it's time to deploy your Next.js app to AWS. To initiate the deployment process, execute the following command:

bashCopy code

`sst deploy`

SST will bundle your Next.js app along with all its dependencies and upload them to AWS Lambda. Additionally, it will create the necessary API Gateway for your app to function as expected.

## Step 6: Verify Your Deployment

---

After the deployment process is complete, you will receive a URL where your Next.js app is hosted. Open this URL in your web browser to verify that your app is running correctly.

## Step 7: Continuous Deployment

---

For seamless continuous deployment, consider setting up a CI/CD pipeline using AWS CodePipeline and AWS CodeBuild. This allows automatic deployment of changes to your app whenever you push code to your repository.

## Conclusion

---

Deploying a Next.js app using AWS SST streamlines the process of leveraging AWS services for your serverless web applications. SST simplifies deployment, enabling you to concentrate on your application's functionality. By following the steps provided in this blog post, you can quickly launch your Next.js app on AWS within a serverless architecture. Happy coding and deploying!
