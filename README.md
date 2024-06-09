# MTB-Traveler

<img src="Images/README%20Photos/Home%20Page.jpg" width="900"/>

## Description

A mountain bike specific travel web application to showcase popular travel destinations. Users will be able to gain information on the most popular trails, the native spoken language, and common currency in the area. Additionally, users will have the ability to translate speech or text and convert their currency to the common currency used in the place their traveling to.

http://mtb-traveler.com

## Technologies Used

- HTML
- CSS
- Javascript
- AWS SDK (Translate, Transcribe, Polly)
- AWS Web Services (IAM, Cognito, S3, CodePipeline, CodeBuild)

## Challenges

One challenge I faced was implementing the AWS SDK. This project is my first web and cloud-based project. So, learning how to bundle and configure my AWS resources to the best practice required some trial and error. Some features I wish to add in the future are AWS transcribe streaming versus the basic transcribe which is implemented now. Using transcribe streaming will transcribe the users voice in real time eliminating the inefficient polling method currently used for the basic transcribe service.

## Follow-on Features

- User accounts, this will allow users to save destinations they would like to visit.
- Utilize Terraform for deployment

## Usage

- <p style="font-size:1.5rem">Language Page</p> 
  <img src="Images/README%20Photos/Language%20Page.jpg" width="900"/>

- <p style="font-size:1.5rem">Currency Page</p> 
  <img src="Images/README%20Photos/Currency%20Page.jpg" width="900"/>

- <p style="font-size:1.5rem">Location Page</p> 
  <img src="Images/README%20Photos/Location%20Page.jpg" width="900"/>
