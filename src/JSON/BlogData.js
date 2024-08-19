const BlogData = [
  {
    "title": "Build a Serverless URL Shortener App",
    "username": "Amey Joshi and Anjali Changedia",
    "blogImg": "https://media.licdn.com/dms/image/v2/D4D12AQHR7Iwws1U6yg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722834114901?e=1728518400&v=beta&t=yotuSWkAwY6VhaigR3jk28WSbOFN7VtlCXR5xOg3HEA",
    "description": "The platform manages the task of shortening the URL without the utilization of servers. One can experience the capabilities of AWS services such as AWS Lambda, Amazon S3, and Amazon API Gateway.",
    "userImg": "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    "publishDate": "2024-08-05",
    "category": "WEB",
    "id": "1",
    "content": [
      {
        "type": "text",
        "desc": "In today's fast-paced digital world, creating a lasting impression is crucial for branding and marketing success. A short and memorable URL plays a vital role in achieving this goal. In this blog post, we will guide you through building a serverless URL shortener app using Python and AWS. This app will enable users to input a lengthy URL and receive a shortened version that redirects to the original URL, making it easy to share and remember."
      },
      {"type":"heading",
        "text":"The Power of Serverless Architecture"
      },
      {
        "type": "text",
        "desc": "Serverless architecture has gained popularity in recent years due to its ability to scale automatically, reduce infrastructure costs, and simplify the development process. By leveraging AWS's serverless offerings, we can build a robust and efficient URL shortener app that meets the demands of modern web applications.A serverless architecture offers several benefits including:Scalability: Serverless apps can automatically scale to handle changes in traffic, without the need for manual intervention.Cost-effectiveness: With serverless, you only pay for the compute time consumed by your app, rather than provisioning and paying for servers.Simplified development: Serverless apps simplify the development process by handling the underlying infrastructure, allowing you to focus on writing code."
      },
      {"type":"heading",
        "text":"AWS services used: "
      },
       {
        "type": "text",
        "desc": "API Gateway: A fully managed service that allows developers to create, publish, maintain, and monitor APIs at any scale.API Gateway will serve as the entry point for incoming requests and manage the integration with other AWS services.Lambda:A serverless compute service that lets developers run their code without provisioning or managing servers. Lambda to generate unique short URLs, store them in a database, and retrieve the original URL when a user accesses the short URL.DynamoDB.A fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB to store the mapping between short URLs and original URLs.IAM: Identity and Access Management service that helps you securely control access to AWS resources. IAM to manage permissions for our Lambda function and DynamoDB table."
      },
      {"type":"heading",
        "text":"Architecture: "
      },
      {
        "type": "text",
        "desc": "The app will consist of two main components:An API Gateway REST API with two endpoints:A Lambda function that performs the following tasks:"
      },
      {"type":"heading",
        "text":"Step-by-step Guide"
      },
      {"type":"heading",
        "text":"1. Set Up AWS Services"
      },
      {"type":"heading",
        "text":"1.1 Amazon S3"
      },
      {
        "type": "text",
        "desc": "Create an S3 bucket to store the Lambda function code and dependencies. Grant the Lambda function read and write permissions to the bucket."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFYlW31hBvrbQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722832922177?e=1729123200&v=beta&t=QuH4kch27oCVK-uxdtTsZF26vYePQ1msJLnUbKbuv6A",
        "alt": "Main blog image"
      },
      {"type":"heading",
      "text":"1.2 AWS Lambda"
    },
    {
      "type": "text",
      "desc": "Create a new Lambda function using the Python runtime. Upload your function code and dependencies to the S3 bucket created in step 1.1. Set up the function to be triggered by API Gateway."
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/D4D12AQHexJ_H9kDJ-w/article-inline_image-shrink_1500_2232/0/1722832965804?e=1729123200&v=beta&t=9CTlCk0d_V8-kih8y2-QEpQ8soMDXqj2ATVN7zrMIKY",
      "alt": "Main blog image"
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/D4D12AQGZKMIK-6xLlg/article-inline_image-shrink_1500_2232/0/1722832939488?e=1729123200&v=beta&t=qzAgO-OtWwYTRd4ANfqKcZrI7Dyj_IWivartknsvbwk",
      "alt": "Main blog image"
    },
    {"type":"heading",
      "text":"1.3 Amazon API Gateway"
    },
    {
      "type": "text",
      "desc": "Create a new REST API with two resources:/shorten (POST)/{short_url} (GET).Set up request and response models for the API. Integrate the API with the Lambda function."
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/v2/D4D12AQEYidEeIxzKTg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722833038672?e=1729123200&v=beta&t=3EMIt83hYrtUhLW-kuDkqMV0zLSlMHfFNkMZODz0nHQ",
      "alt": "Main blog image"
    },
    {"type":"heading",
      "text":"1.4 Amazon DynamoDB"
    },
    {
      "type": "text",
      "desc": "Create a new DynamoDB table to store the long URL and the corresponding short URL. The table should have the following structure:"
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/D4D12AQGLJshRQ3gfmA/article-inline_image-shrink_1500_2232/0/1722833069035?e=1729123200&v=beta&t=VdDw53vGTAxaldXzOJBV9ax9Vw3HmneJF84twX43Usc",
      "alt": "Main blog image"
    },
    {
      "type": "text",
      "desc": "Grant the Lambda function read and write permissions to the DynamoDB table."
    },
    {"type":"heading",
      "text":"1.5 AWS Systems Manager Parameter Store"
    },
    {
      "type": "text",
      "desc": "Store the DynamoDB table name as a secure string in the Parameter Store. Grant the Lambda function read access to the Parameter Store."
    },
    {"type":"heading",
      "text":"1.6nbsp; Implement the Lambda Function"
    },
    {
      "type": "text",
      "desc": "The Lambda function should perform the following tasks:Retrieve the DynamoDB table name from the Parameter Store.Generate a unique short URL for the given long URL.Store the long URL and the corresponding short URL in the DynamoDB table.Retrieve the long URL when a user accesses the short URL."
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/D4D12AQHb5kQWMhUzsg/article-inline_image-shrink_1500_2232/0/1722833091536?e=1729123200&v=beta&t=hQuAKFFdTlulZ1XDFtEyoiRrAKia0RfQyvQCiHH2sWY",
      "alt": "Main blog image"
    },
    {"type":"heading",
      "text":"2. Building the App"
    },

      {
        "type": "text",
        "desc": "In this section, we will walk you through the process of building the serverless URL shortener app using Python and AWS."
      },
      {"type":"heading",
      "text":"Step 1: Setting up the Environment"
    },
    {
      "type": "text",
      "desc": "To get started, you will need to set up an AWS account and install the AWS CLI. Follow the official AWS documentation to complete these tasks."
    },
    {"type":"heading",
      "text":"Step 2: Creating the DynamoDB Table"
    },
    {
      "type": "text",
      "desc": "Create a DynamoDB table to store the mapping between short URLs and original URL. To create a new table, go to the DynamoDB console and click 'Create table.' Name the table 'url-shortener' and add a primary key called 'short_url' with a type of 'String.'"
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/v2/D4D12AQHbceLf60YF9w/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722833105074?e=1729123200&v=beta&t=Dq8vcwfK_aGKio9ZTZd7B-xl6PE48D2jPjbxsk1vuhg",
      "alt": "Main blog image"
    },
    {"type":"heading",
      "text":"Step 3: Creating the Lambda Function"
    },
    {"type":"heading",
      "text":"Step 2: Creating the DynamoDB Table"
    },
    {
      "type": "text",
      "desc": 'Now, we will create a Lambda function that will handle the logic for generating short URLs and retrieving original URLs. To create a new Lambda function, go to the Lambda console and click "Create function." Choose "Author from scratch" and name the function "url-shortener." Choose the "Python 3.8" runtime and give the function the following role: "Create a new role with basic Lambda permissions". Create a new directory on your local machine and add the following files:lambda_function.py: The main Lambda function code.requirements.txt: A list of required Python packages.'
    },
    {"type":"heading",
      "text":"Step 4: Create an API Gateway"
    },
    {
      "type": "text",
      "desc": 'Create a new API Gateway REST API with a resource called "shorten" and a POST method. Choose "Lambda Function" as the integration type and select the "url-shortener" function.'
    },
    {"type":"heading",
      "text":"Step 5: Create a CloudFront distribution"
    },
    {
      "type": "text",
      "desc": 'Create a new CloudFront distribution with an origin for the API Gateway. Choose "Redirect HTTP to HTTPS" as the viewer protocol policy.'
    },
    {"type":"heading",
      "text":"Step 6: Test the URL shortener app"
    },
    {
      "type": "text",
      "desc": 'Use a tool like cURL or Postman to send a POST request to the API Gateway endpoint with a JSON payload containing the long URL. The app should return a short URL that redirects to the long URL.'
    },
    {
      "type": "image",
      "src": "https://media.licdn.com/dms/image/v2/D4D12AQHaQqqeyRqksA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722833125577?e=1729123200&v=beta&t=zy8WNsalRPnN2e_gM01PJ_ZhsiIvdyQpfuRZ_WM2Ps4",
      "alt": "Main blog image"
    },
    {"type":"heading",
      "text":"Step 7: Deploy the URL shortener app"
    },
    {
      "type": "text",
      "desc": 'Use the AWS Serverless Application Model (SAM) to package and deploy the app. Create an AWS SAM template that defines the necessary resources and their properties, and then use the “sam build” and “sam deploy” commands to package and deploy the app.Now you can use the app by sending a POST request to the /shorten endpoint with a long URL as the request body. The app will return a shortened URL that you can share with others. When someone accesses the short URL, the app will redirect them to the original long URL'
    }
    ]
  },
  {
    "title": "Automated video monitoring system with AWS IoT and AI/ML",
    "username": "Mikhiel Benji and Nilakshi Sonawane",
    "blogImg": "https://media.licdn.com/dms/image/D4D12AQFrIgjA_xu80w/article-cover_image-shrink_720_1280/0/1722182272265?e=1728518400&v=beta&t=ahCRuV2iN2CwJ1aqrvzkc7b_CaHU4oAkOMlZTvORRn4",
    "description": "AWS SimuLearn uses Amazon Bedrock AI for realistic, interactive simulations. Engage with virtual customers, navigate dynamic scenarios, and build tailored AWS solutions to supercharge your expertise",
    "userImg": "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=600",
    "publishDate": "2024-07-28",
    "category": "AI/ML",
    "id": "2",
    "content": [
        {
          "type": "heading",
          "text": "Introduction"
        },
        {
          "type": "text",
          "desc": "Imagine a world where video monitoring systems don’t just watch — they understand and react. With AWS IoT and AI/ML technologies, we’ve built a revolutionary system that takes surveillance to the next level. This isn’t just smart monitoring; it’s like having a tech-savvy assistant ensuring everything runs smoothly and securely."
        },
        {
          "type": "heading",
          "text": "Key Components"
        },
        {
          "type": "heading",
          "text": "Amazon Kinesis Video Streams (Amazon KVS) with WebRTC"
        },
        {
          "type": "text",
          "desc": "Captures and archives video footage from a laptop’s webcam directly into Amazon S3. Utilizes WebRTC to facilitate real-time communication across web browsers and mobile devices."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQEBZ2sRkEBipg/article-inline_image-shrink_1500_2232/0/1722182034107?e=1729123200&v=beta&t=ZcGDsUU-bj-mE7IkiTGQQg-d8dsexYvgGt-_eZGeCUw",
          "alt": "Kinesis Video Streams with WebRTC"
        },
        {
          "type": "heading",
          "text": "Amazon Rekognition Video"
        },
        {
          "type": "text",
          "desc": "Performs in-depth analysis on stored videos to detect various entities and stores the analysis results as images in Amazon S3 and metadata in JSON format."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQH3K8JiBf9odw/article-inline_image-shrink_1500_2232/0/1722182069511?e=1729123200&v=beta&t=gGaMmQtWQJHAsBfOat7RmBy-gl4QQHb5iA2eLqtkpNo",
          "alt": "Amazon Rekognition Video"
        },
        {
          "type": "heading",
          "text": "Amazon OpenSearch Service"
        },
        {
          "type": "text",
          "desc": "Provides robust search functionality for identified data and structures from Rekognition using indexed metadata, supporting real-time monitoring of applications and web search capabilities."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/v2/D4D12AQHuPu0WqbXTAw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722182085922?e=1729123200&v=beta&t=PgZHx2orXBce22gdaE7Y4ghSE5VGVq_ngd_AAjKT17Q",
          "alt": "Amazon OpenSearch Service"
        },
        {
          "type": "heading",
          "text": "Front-end Application"
        },
        {
          "type": "text",
          "desc": "Offers a user-friendly interface for searching and viewing detected entities, accessing and retrieving data from an Amazon OpenSearch Service data store."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQGoxODk77LvUw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722182106207?e=1729123200&v=beta&t=MI4o1WE_riBaAXhrP766590u6bBt_602_2vkWar358M",
          "alt": "Front-end Application Interface"
        },
        {
          "type": "heading",
          "text": "Important Points"
        },
        {
          "type": "heading",
          "text": "Video Data Management"
        },
        {
          "type": "text",
          "desc": "Recorded and generated videos are temporarily stored in Amazon S3 for the duration of the session and are subsequently deleted."
        },
        {
          "type": "heading",
          "text": "Region"
        },
        {
          "type": "text",
          "desc": "Resources are provisioned in the us-west-2 region following specific procedures and guidelines."
        },
        {
          "type": "heading",
          "text": "Browser Requirement"
        },
        {
          "type": "text",
          "desc": "Google Chrome is the recommended browser, especially for accessing the KVS WebRTC Test Page."
        },{
          "type": "heading",
          "text": "Configuring OpenSearch and IAM Roles"
        },
        {
          "type": "heading",
          "text": "Integrating Search Capabilities"
        },
        {
          "type": "text",
          "desc": "Access the OpenSearch Dashboards and configure your Lambda IAM role to interact with the OpenSearch domain. Ensure that your IAM roles are correctly mapped to allow full functionality for data search and analysis."
        },
        {
          "type": "heading",
          "text": "Setting Up the Front-End Interface"
        },
        {
          "type": "heading",
          "text": "Deploying the Application Interface"
        },
        {
          "type": "text",
          "desc": "Use AWS Cloud9 to deploy your front-end interface, enabling user interaction with the video analytics system."
        },
        {
          "type": "text",
          "desc": "Access AWS Cloud9 via the AWS Management Console, search for 'Cloud9,' select the service, find the environment named 'kvs-workshop-environment,' and click 'Open' to launch the IDE."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/v2/D4D12AQF8bvwqMNEIDg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722182189876?e=1729123200&v=beta&t=lS_qusMl7iMqqTOmiHoqMzUwTR0Qid6veIumPJTG2fU",
          "alt": "Cloud9 Interface Overview"
        },
        {
          "type": "text",
          "desc": "Explore the Cloud9 IDE, where the Welcome page should appear. The terminal is at the bottom, the directory options are on the left, and you can use the “+” sign at the top to start new files or terminals."
        },
        {
          "type": "heading",
          "text": "Clone the Git Repository"
        },
        {
          "type": "text",
          "desc": "In the Cloud9 terminal, run: `git clone https://github.com/aws-samples/aws-workshop-for-real-time-video-analysis`."
        },
        {
          "type": "heading",
          "text": "Open the Config File"
        },
        {
          "type": "text",
          "desc": "In the directory explorer, go to aws-workshop-for-real-time-video-analysis/resources/code/frontend/src and double-click config.js to open it."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/v2/D4D12AQGgbLcCxaQACw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1722182204381?e=1729123200&v=beta&t=JYVq9SWjeztI4MEEefCWvqSl4e_-x93d4MjBni0BhjU",
          "alt": "Config.js file open in Cloud9 IDE"
        },
        {
          "type": "heading",
          "text": "Update Config.js"
        },
        {
          "type": "text",
          "desc": "Get the Amazon CloudFront Distribution URL and Amazon API Gateway URL from the Outputs section of the iot304-lambda-stack in CloudFormation. Paste the values into CLOUDFRONT_URL and API_GW_URL in config.js, ensuring there’s no http:// prefix or trailing slash. Save the file."
        },
        {
          "type": "heading",
          "text": "Install Dependencies"
        },
        {
          "type": "text",
          "desc": "Change to the frontend directory with `cd aws-workshop-for-real-time-video-analysis/resources/code/frontend/` and install the dependencies with `npm install`."
        },
        {
          "type": "heading",
          "text": "Start the Application"
        },
        {
          "type": "text",
          "desc": "Run the application with `npm run start`. Click 'Preview' at the top of Cloud9, select 'Preview Running Application,' and click 'Pop Out Into New Window' to view the app in a new tab."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQFqDpzmT94kPQ/article-inline_image-shrink_1500_2232/0/1722182225216?e=1729123200&v=beta&t=QbgBNguxMllEQV9cyQ7Q_NMLQUBnW9q_7gDhiASPqdk",
          "alt": "Previewing the application in a new tab"
        },
        {
          "type": "heading",
          "text": "Running the Workflow"
        },
        {
          "type": "text",
          "desc": "Return to the Kinesis Video Streams WebRTC Test Page to start the video master feed. Use the AWS CLI to execute your Step Function, triggering the processing workflow. Check the Step Functions console to ensure the process starts correctly."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQFVSie00erQkw/article-inline_image-shrink_1500_2232/0/1722182233255?e=1729123200&v=beta&t=rRVNtieoWPrwP1tr-FRN1b0M8hQsPv53w63YlDNzuBQ",
          "alt": "Running the workflow in Step Functions"
        },
        {
          "type": "heading",
          "text": "Utilizing the Front-End Application"
        },
        {
          "type": "heading",
          "text": "Exploring the Video Analytics Interface"
        },
        {
          "type": "text",
          "desc": "The application allows you to search and review labels detected in your video streams. It provides tools to specify time frames and explore results dynamically."
        },
        {
          "type": "heading",
          "text": "Enhancing Functionality"
        },
        {
          "type": "text",
          "desc": "Consider extending the setup by integrating additional WebRTC-compatible devices or developing features like alert systems for specific object detection."
        },
        {
          "type": "text",
          "desc": "Finally, this cutting-edge video analytics system uses AWS services to improve exam monitoring by detecting malpractices in real-time. Kinesis Video Streams with WebRTC enables live oversight, while AWS Lambda and Rekognition automatically alert supervisors to suspicious activities. Video data is stored for quick access, and the Video Analytics App on AWS Cloud9 provides an easy way to review events. This solution demonstrates how cloud technologies enhance security in educational environments."
        }
  
      
    ]
  },
  {
    "title": "Serverless Image Processing Using AWS",
    "username": "Ankit Patne and Pranali Lokhande",
    "userImg": "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    "blogImg": "https://media.licdn.com/dms/image/D4D12AQFFIoFkBlzM1g/article-cover_image-shrink_720_1280/0/1721573472942?e=1728518400&v=beta&t=XSM_xumdEGy7S8iOwMUOIMg6xrDVn4m8iZVAThpjPC8",
    "description": "The platform manages the task of image processing without the utilization of servers. One can experience the capabilities of AWS services such as AWS Lambda, Amazon S3, and Amazon API Gateway. Serverless architectures can cut costs for applications with varying levels of usage. This serverless approach significantly simplifies infrastructure management. Hence utilizing cloud computing in the best way possible!",
    "publishDate": "2024-07-21",
    "category": "AWS",
    "id": "3",
      "content": [
        {
          "type": "heading",
          "text": "Serverless Image Processing on AWS"
        },
        {
          "type": "text",
          "desc": "This guide provides a step-by-step process to set up a serverless image processing pipeline on AWS, utilizing services like AWS Lambda, Amazon S3, and API Gateway."
        },
        {
          "type": "heading",
          "text": "What is Serverless Image Processing?"
        },
        {
          "type": "text",
          "desc": "Serverless image processing involves using cloud-based services to handle image tasks like resizing, cropping, and format conversion without managing servers."
        },
        {
          "type": "heading",
          "text": "AWS Services Used"
        },
        {
          "type": "text",
          "desc": "AWS Lambda: For creating image processing functions. Amazon S3: For storing original and processed images. Amazon API Gateway: For creating API endpoints to upload and retrieve images."
        },
        {
          "type": "heading",
          "text": "Architecture Diagram"
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/v2/D4D12AQHlRY-zraiDFg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1721572960591?e=1729123200&v=beta&t=4U-NQ29mey6qhx7mMQhcY4fhPKBHnLQbupj1QRjSuQI",
          "alt": "Architecture Diagram for Serverless Image Processing on AWS"
        },
        {
          "type": "heading",
          "text": "How It Works: A Step-by-Step Explanation"
        },
        {
          "type": "text",
          "desc": "This section explains the process from image upload via Postman to image retrieval after processing by AWS Lambda and storage in S3."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQEwZmYYaxVQBg/article-inline_image-shrink_1500_2232/0/1721572982075?e=1729123200&v=beta&t=rksgKgUWTSmvWoBU9RitWbJiR5qxFmyS0jAHy6KCVQI",
          "alt": "Postman upload image"
        },
        {
          "type": "text",
          "desc": "Postman: Uploads image. API Gateway: Routes the image to Amazon S3. S3: Stores the original image. Lambda: Processes the image. S3: Stores the processed image. API Gateway: Allows image retrieval. Postman: Downloads the processed image."
        },
        {
          "type": "heading",
          "text": "Using Postman for API Requests"
        },
        {
          "type": "text",
          "desc": "Postman is a popular tool for testing APIs. It allows you to create and send HTTP requests, view responses, and debug API interactions."
        },
        {
          "type": "heading",
          "text": "Steps for Serverless Image Processing"
        },
        {
          "type": "text",
          "desc": "Step 1: Set Up AWS Services. Step 2: Configure S3 Buckets. Step 3: Create the Lambda Function. Step 4: Set Up API Gateway. Step 5: Test and Deploy."
        },
        {
          "type": "image",
          "src": "https://media.licdn.com/dms/image/D4D12AQHQfOsP1_pNNQ/article-inline_image-shrink_1500_2232/0/1721573157189?e=1729123200&v=beta&t=py0vJbOquksnCjBTDatj-yxMP5YyjgmPGhqAtQSTPqY",
          "alt": "Testing serverless image processing"
        },
        {
          "type": "heading",
          "text": "Conclusion"
        },
        {
          "type": "text",
          "desc": "AWS's serverless services create a smooth image processing pipeline, simplifying management and increasing efficiency, allowing you to focus on innovation and user experience."
        }
      ]
    },
  {
    "title": "Online Pathology Platform using React and DynamoDB",
    "username": "Girish Kale and Sonali Kamble",
    "userImg": "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    "blogImg": "https://media.licdn.com/dms/image/v2/D4D12AQGUgQhJj0yA5g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720974929018?e=1728518400&v=beta&t=66Ls7O-W0F_8cBNLBPY7jZ-aI55jB4dzab0MWAcAjBo",
    "description": "This pathology platform provides an online reporting system of the patient test records. It provides a comprehensive user friendly platform for the doctors to easily store the patient records or perform operations like- Adding patient record, storing the record details, updating the record details, deletion and generation of an online report.",
    "publishDate": "2024-07-14",
    "category": "WEB",
    "id": "4",
    "content": [
      {
        "type": "text",
        "desc": "In today's fast-paced world, there is a growing demand for more efficient ways to accomplish daily tasks. Over the past decades, we have witnessed a digital transformation in healthcare. This project embodies the concept of an engaging online report. Getting the results of your tests online would be more convenient. Reports can be efficiently updated based on the patient's provided credentials."
      },
      {
        "type": "text",
        "desc": "The platform enables users to utilize the saved information. Access the lab test results effortlessly with your user credentials. The process would reduce the task of standing in the queues waiting for your turn. The entire platform is more sophisticated and systematic to use. Our objective is to revolutionize how pathology reports are accessed and managed, providing a reliable and advanced solution that enhances the healthcare experience for all parties involved."
      },
      {
        "type": "heading",
        "text": "Utilization of AWS"
      },
      {
        "type": "text",
        "desc": "Gone are the days when companies grappled with significant losses while building tech teams and making investments in storage. They needed to rely on multiple hard drives, leading to increased expenses. Therefore, to address this challenge, cloud computing was designed."
      },
      {
        "type": "text",
        "desc": "The AWS platforms deliver a wide range of services. It is a broadly used cloud platform. Dealing with high traffic can be challenging, but with the help of AWS's DynamoDB, we can effectively handle and manage it."
      },
      {
        "type": "text",
        "desc": "AWS's DynamoDB is an easy-access platform that controls high traffic. It helps in rapid growth. It is a managed NoSQL database optimized for performance at scale. It will provide a primary key to find the corresponding values. One of the main features involves high availability and durability. It is a pay-as-you-go model."
      },
      {
        "type": "text",
        "desc": "The project involves the usage of MERN stack development. React.js is used for the front end, and node.js for the back end."
      },
      {
        "type": "heading",
        "text": "How does this work?"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQED1ZfxLgZiTA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973485370?e=1729123200&v=beta&t=94gqwPGzr9B0u8ll70fEFU74yVd0RkTnQ-3tlmm80-E",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "The above image represents the front page of the website. It consists of 3 header options at the top right-most corner. It includes - Create New, Report, and Add test."
      },
      {
        "type": "text",
        "desc": "On hovering on Create New, the following page appears."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQGQqtIngeU4QA/article-inline_image-shrink_1500_2232/0/1720973499008?e=1729123200&v=beta&t=RI4636z-SaWKJGMYstuD9afE9hXs0v6bW4olUGK1lhM",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "One can input the credentials and other details and click the Submit button. The examined and submitted date is to be provided by the user. One can clear the form if something is inaccurately input with the Clear button."
      },
      {
        "type": "text",
        "desc": "The Report header appears as follows."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQFwMzgzu987Kw/article-inline_image-shrink_1500_2232/0/1720973522569?e=1729123200&v=beta&t=oDGV8rG2ILh6rTS5FIiseTDpy7VE8mLl8lGT6PN8mkQ",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "The Reports tab consists of two sections: Pending and Completed. It simply puts all the pending test reports in the Pending section and the Completed reports in the Completed section. If one needs to update the patient's details, they can click the icon on the left to the delete icon. It would open an Update Patient page as follows."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGPhDsYw-wucg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973541587?e=1729123200&v=beta&t=CTK_YQ4Lk0cqufJvIcCq7QWAEzexFJ8vpi5rnMSWhqw",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "Now, to add tests to a particular pathology test, click on the icon on the right to the delete icon. It would lead to the following page."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQHZNhhsq0UsgA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973551490?e=1729123200&v=beta&t=v_p7PJYjpI_z7nQQ5qu6KDV_VLlbm3Olocv4vfAgicI",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "The completed tests are shown in the Completed section. The image below represents some of the tests those are completed."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQEfCOPAVyc89Q/article-inline_image-shrink_1500_2232/0/1720973563868?e=1729123200&v=beta&t=ltIWy4OPtCVRWumxQXsZgsr5nrQW8-9r6o7lMaZAqUo",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "Now, by clicking on   provides you with a preview of the report to be printed. Let’s take the first example and develop a preview of the same. It would be represented as the image shown below."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQHxHS0Xydi0AQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973574435?e=1729123200&v=beta&t=ExrPJDzLMKliboRTk3m-29RkJRqEOHEa0-2qXG_93C8",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "Here, one can Add and Remove tests as needed. The report gets generated when clicked on the Reports button."
      },
      {
        "type": "text",
        "desc": "The Add Test tab opens up a pop-up as follows. Here, one can input the details related to the test along with the biological reference values."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQEPmoNTIr_9iw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973584754?e=1729123200&v=beta&t=DSlRe0vSHtIyB3KXVjI5k2DcymbK7h5Uo3iTYtAC5Gg",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "A standard pathology report generally includes patient details such as name, identification number, and relevant medical history. It has the type, source of the specimen, and details of the collection and handling of the specimen. The report also has the name and degree of the referring doctor and the pathologist in charge."
      },
      {
        "type": "text",
        "desc": "One can search for the tests and then select accordingly. Biological reference values are set by default on the test results. These are the minimum or the maximum values. The report would consist of the reporting details, test methods, and instruments used. The process of extracting this information is labor-intensive and error-prone. This task is made easy with online report technology."
      },
      {
        "type": "text",
        "desc": "The test results come in a standardized template, with the layout and format depending on the nature of the test.It ensures that the treatment is accurate and efficient.The platform consists of 5 tests: Haemoglobin, Urine Glucose, Urine Drug, Blood Glucose, and Stool DNA. More such tests can be added to the same according to the need. It appears as follows:"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQEbAhkUVlqtvw/article-inline_image-shrink_1500_2232/0/1720973608465?e=1729123200&v=beta&t=FYFkaqgn69NMU2Nn-OofhzLeup9fSrTs15S2Fo--cW4",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "A sample report is displayed below:"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQFnK8wfa4RcRw/article-inline_image-shrink_1500_2232/0/1720973616569?e=1729123200&v=beta&t=EeGqwy3963ULlI1m4DE_ilIeOkf1uGmtC0uxaqp8VKI",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "All the database of the patients gets created at the AWS platform, i.e. AWS’s DynamoDB. Under the Access Management section, User groups and Users are represented as follows."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQHtVxzGWJ0dng/article-inline_image-shrink_1500_2232/0/1720973631045?e=1729123200&v=beta&t=Wu3PNyh7wxSPpyUvY3akaB9xp5uF4lJmTBO-MRkfcRM",
        "alt": "Main blog image"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQFAHxoEaotB6Q/article-inline_image-shrink_1500_2232/0/1720973643539?e=1729123200&v=beta&t=d3jpj36EQHM9d3obebymouzMC27w4g850H9GYlnJywo",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "Now under the dashboard, one can go to the Tables section and can access the patient’s data."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFU1TzMRAyliw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973654442?e=1729123200&v=beta&t=kzW0WF_LfKluaz3gHrknEGo4ca-rQW9wcqkOwfs_Fds",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "Moving to the Explore Items section, one can select Lab tests to get the data of tests taken, while Patients to access the patient’s credentials. The image below represents the database of lab and patients respectively."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFCG69OGBcNyA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973664196?e=1729123200&v=beta&t=KMTVHYMJUShqYhOH5GyVdq0GKdYo1cKk2_3ISXRqEOE",
        "alt": "Main blog image"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGSDu7WH8T1QQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1720973671604?e=1729123200&v=beta&t=hQxT6j6kygQNBP0N65TFTajzg80XmZHDCPtKIOEbqYc",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "AWS ensures robust data security, real-time access, and seamless integration with existing systems. It makes database management relatively easier. The use of AWS is developing a transformation in the healthcare industry. AI algorithms enable the growth of pharmaceuticals. Nowadays, these help to automatically design and analyze mRNA and DNA sequences. It preserves a lot of time."
      },
      {
        "type": "text",
        "desc": "Hence, the evolution of healthcare industries would be valuable for the economy. It would accurately redefine the utilization of technology."
      },
      {
        "type": "heading",
        "text": "Project GitHub : "
      },
      {
        "type": "text",
        "desc": "Link: https://github.com/girishk1911/Rudra_Clinical_Lab/tree/main"
      },
    ]

    
  },
  {
    "title": "Deploying a NodeJS Application on AWS EC2 Instance — Step by Step",
    "username": "Prachi Said & Tirthraj Mahajan",
    "userImg": "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    "blogImg": "https://media.licdn.com/dms/image/v2/D4D12AQFsWiEZK3sxxA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1719149384529?e=1729728000&v=beta&t=rKlSR5H0LYmLShXGm6HTTC8MhT7W4MzfpLda4vDQh8k",
    "description": "In the world of cloud computing, Amazon Web Services (AWS) stands out as a leader, offering a wide range of services to meet the diverse needs of businesses and developers. One of the cornerstone services of AWS is Amazon Elastic Compute Cloud (EC2). In this blog, we will explore what Amazon EC2 is, its features and benefits, and provide a detailed guide on “How to host a NodeJS application on EC2 instance",
    "publishDate": "2024-06-23",
    "category": "AI",
    "id": "5",
    "content": [
      {
        "type": "text",
        "desc": "In the world of cloud computing, Amazon Web Services (AWS) stands out as a leader, offering a wide range of services to meet the diverse needs of businesses and developers. One of the cornerstone services of AWS is Amazon Elastic Compute Cloud (EC2). In this blog, we will explore what Amazon EC2 is, its features and benefits, and provide a detailed guide on “How to host a NodeJS application on EC2 instance”."
      },
      {
        "type": "heading",
        "text": "In order to understand what EC2 is we need to know two basic things — virtual server and hypervisor —"
      },
      {
        "type": "text",
        "desc": "Virtual Server — A virtual server / virtual machine is a type of software enabled server that can be created by dividing a physical server referred to as host into smaller segments sharing the same resources, each having a different operating system and networking options. All these virtual servers are isolated from each other."
      },
      {
        "type": "text",
        "desc": "Hypervisor — Hypervisor also known as virtual machine manager is a specialized software that enables a physical machine to run multiple virtual machines simultaneously. As we know each VM operates as an independent computer with its own OS and applications, despite sharing the physical resources. Hypervisor allocates and manages these resources, and ensures each machine operates in isolation from the other."
      },
      {
        "type": "heading",
        "text": "What is an EC2?"
      },
      {
        "type": "text",
        "desc": "In EC2 we request the AWS to provide us with a scalable virtual server also known as an instance. It provides resizable compute services in the cloud. They are resizable because you can quickly scale up and down the number of server instances you are using in the computing requirements."
      },
      {
        "type": "heading",
        "text": "Why we use EC2?"
      },
      {
        "type": "text",
        "desc": "Why don’t we buy our own set of servers and work independently?The reason is suppose you’re a developer, and since you want to work independently you buy some servers, you estimated the correct capacity, and the computing power was also enough to run your application. Now you have to look after the updation of security patches everyday you have to troubleshoot any problem which might occur at a back end level in the server and so many reasons. These are all extra tasks that you may need to do on a regular basis or maybe you’ll hire someone else to do these things for you.But if you buy an EC2 instance you don’t have to worry about any of those things as it will be managed by Amazon, you just have to focus on your application. That to at a fraction of cost you were incurring earlier."
      },
      {
        "type": "heading",
        "text": "Types of EC2 instances:"
      },
      {
        "type": "text",
        "desc": "1. General purpose — In Amazon EC2, a general purpose instance refers to a type of virtual server (instance) that provides a balanced mix of compute, memory, and networking resources. These instances are designed to be versatile and suitable for a wide range of workloads, from small applications to enterprise-grade workloads."
      },
      {
        "type": "text",
        "desc": "2. Compute optimized — Amazon EC2 instances are designed to deliver high-performance computing power. These instances are optimized to provide a high ratio of compute power (CPU) to memory, ensuring that applications that rely heavily on computational tasks can perform efficiently. E.g — Gaming"
      },
      {
        "type": "text",
        "desc": "3. Memory optimized — Amazon EC2 instances are specifically designed to provide high memory-to-CPU ratios, making them ideal for workloads that require substantial amounts of RAM to process large datasets or run memory-intensive applications efficiently. E.g — Big data analytics"
      },
      {
        "type": "text",
        "desc": "4. Storage optimized — Amazon EC2 instances are tailored to meet the demands of workloads that require high storage capacity and fast access to data. These instances prioritize providing ample local storage resources and high disk throughput."
      },
      {
        "type": "heading",
        "text": "Steps for deploying the application"
      },
      {
        "type": "heading",
        "text": "Step 1 — Navigate to EC2 Dashboard"
      },
      {
        "type": "text",
        "desc": "In the AWS Management Console, type “EC2” in the search bar and select “EC2” from the dropdown menu. This will take you to EC2 Dashboard."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQEVAKDHnBjHug/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245733?e=1729123200&v=beta&t=sQThySsHiSNZ32FCiF3z5Kn-Q5Xjcr01XZIdcZbkhdg",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "Step 2 — Click on launch instance"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGFono8WbBqLA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245981?e=1729123200&v=beta&t=EzjWrsFJ2J3hy_GSKP5JvILW06b4T-aCKZyqQfQARoU",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "Step 3: Configure the Instance"
      },
      {
        "type": "heading",
        "text": "3.1 — Select Name"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGRQcHCxAgWIA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245345?e=1729123200&v=beta&t=wD-HJYXjUxBkg_Vc0ant9h_NJ1pCKSBVA6C5ObL8USU",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "3.2 — Choose Amazon Machine Image — For our purpose, we can use the Ubuntu Server"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQFM96kfNjjy9A/article-inline_image-shrink_1500_2232/0/1719149245566?e=1729123200&v=beta&t=N_6ifJMwpVzsLvyeDHqPce62uZsa-hsLOT76FaVzdzs",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "3.3 — Choose an Instance type"
      },
      {
        "type": "text",
        "desc": "Select the “t2.micro” instance type. This instance type is part of the free tier for eligible users, offering 750 hours per month for the first 12 months."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFSd6YxU6rlSw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245300?e=1729123200&v=beta&t=lAovBmWya-30MaJvo5WFop2KckZ3NTiyoJuqlzQ2NR0",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "3.4 Select a Key Pair"
      },
      {
        "type": "text",
        "desc": "You need a key pair to SSH into your instance. [f you already have a key pair, select it. If not, create a new key pair and download it (.pem file). Keep this file secure as you’ll need it to access your instance.]"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQG9H-12xAMamg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149244177?e=1729123200&v=beta&t=DCe-ZplumKQM5jMdn89J4hPcqQz9NRZkhO9nEU6bbf8",
        "alt": "Main blog image"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFkt1XkQx4efw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245946?e=1729123200&v=beta&t=M0GIbVj2YUhaynTZD4f5qOVgi17I1bGXetwwjl1zXHE",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "3.5 Configure Security Group"
      },
      {
        "type": "text",
        "desc": "A security group acts as a virtual firewall to control inbound and outbound traffic. Create a new security group with following rules."
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGZnt8uXyrNLA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149246403?e=1729123200&v=beta&t=WHZNh1-6RxY4XXib6oCgFXunU_GBCY-lyGDfnq8QILI",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "3.6 — Launch Instance — Click on launch instance"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQGPT0ymcdUBZA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245322?e=1729123200&v=beta&t=ImBc8Zlv_tHCbfrYchZKAaKJ36U2pfq5B_xLdxDp_x8",
        "alt": "Main blog image"
      },
      {
        "type": "heading",
        "text": "Step 4: Connect to EC2 instance using EC2 Instance Connect"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQGgPBQK9yr2DA/article-inline_image-shrink_1500_2232/0/1719149245325?e=1729123200&v=beta&t=AzIg8OEZLDV97XUjbc4NDxM4JNI0CX6Y1r3cGGoGyw8",
        "alt": "Main blog image"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/D4D12AQEyOySCSHxKww/article-inline_image-shrink_1500_2232/0/1719149244770?e=1729123200&v=beta&t=gGheivy5AhOzNDVwmRoOqj7n68eNt_heLako7Fs0D6Y",
        "alt": "Main blog image"
      },
      {
        "type": "text",
        "desc": "This should connect you to the virtual machine.You can also connect to the instance using the SSH key we generated earlier (Optional)"
      },
      {
        "type": "image",
        "src": "https://media.licdn.com/dms/image/v2/D4D12AQFhSEOmudm4ug/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719149245592?e=1729123200&v=beta&t=2Zy5Obn3GaeXWFbAbcUJDB79wQKMr8nmeMJx23eR0BQ",
        "alt": "Main blog image"
      },




      {
        "type": "image",
        "src": "",
        "alt": "Main blog image"
      },
      
      {
        "type": "text",
        "desc": ""
      },
      {
        "type": "heading",
        "text": ""
      },
    ]
  },
]

export default BlogData;