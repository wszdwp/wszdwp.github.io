---
title: Deep Learning on Mobile Notes
layout: post
tags: Android iOS
published: false
---

# Deep Learning on Mobile Notes

## Advantages  
- Data privacy  
- Interactive experiences
- offline ability  
- "Free" computing power  

## Challenges  
- Limited computing power
- Limited memory  
- Realtime 300ms test  
- Batter and Heat  

## Diagram for develop flow 
Train your model -> Choose DL framework -> Choose Mobile OS (GPU, DSP, CPU) -> App design

small, speed, accurancy, 
Compact model
- MobileNet v1/v2 
- ShuffleNet  
- SqueezeNet  



MobileNet  
Keyidea Depthwise Seperable Concolution  

How 

1. Pruning neural networks
- remove low weight edges and nodes  

not practical!!! why ? non stuctured network, 
improvement, only pruning lower weighted feature layer!

2. Quantize Neural Networks  
32 bit to 8 bit
looks easy but in practice very hard!!!
[ref google TFlite google leNet paper]()

pactice: 8 bit

future improvement eg: weight value to (-1, 0, 1)

3. Framework choice  
- TensorFlow - easy to deploy on android mobile
TFLite (good momentum, half-baked as of today)

- Caffe2  (more industry) , pytorch for academic 
From facebook
under 1MB binary size  
Built for speed  

iOS
- Core ML
From Apple for iOS 11
built on top of low level primitives
great performance

Android
- Snapfragon Neural Processing Engine(NPE) for Android

- MxNet

- CNNdroid 
- TensorFlow.js WebGL
- Keras
- Therano


## Lessons learning
### Train Model  
Cloud  (cost $$$) 
- expensive cost

DIY GPU (cost $)

Utilize model-zoo
quick baseline  
pre-trained model to start with

### Data data data

### Training - time is $
visulize debug info - tensorboard 
pitfalls like batch-norm for training vs inference
Baby-sit parallel-branching for experiments iterate..

Cloud AutoML Vision (keeps watching)

### Target OS with DL Framework

small model size not always mean fast interence speed 
for CoreML, possible degradation due to float32 -> float16  


resources:
stanford cs231


















