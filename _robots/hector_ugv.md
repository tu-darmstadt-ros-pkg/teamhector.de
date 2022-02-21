---
name: Hector UGV
height: 0.5m
weight: 10 kg
locomotion: Wheels (Differential)
lidar: Hokuyo
cameras: Microsoft Kinect
additionalSensors: IMU

active: false
firstUsed: 2010
lastUsed: 2015
image: hector_ugv.jpg
---
Hector UGV has been developed since 2010. It was the basis for the development of Hector SLAM and the achievements in the RoboCup Rescue Robot League from 2012 - 2014.

It is based on a R/C model car Kyosho Twin Force as mobility platform (refered to as ”Hector GV”). It is modiﬁed for better autonomous vehicle handling and enhanced with an onboard computer and a laser range ﬁnder. For victim identiﬁcation a vision box was developed, including a visual and a thermal camera.

## Robot Locomotion

The Hector GV is based on a Kyosho Twin Force RC model with a powerful and fast drive train. For indoor navigation we modiﬁed the drive train, the steering and the suspension because of the much higher weight.

**4-wheel-drive:** The 4-wheel-drive of this vehicle has one diﬀerential gear per axis and no middle diﬀerential gear. This ensures that if only three wheels have grip the vehicle is moving. To reduce the maximum speed and increase the strength we added a 1:5 gear.

**4-wheel-steering:** The front and rear wheels can be controlled independently to have three advantages over a normal 2-wheel-steering:

* a smaller minimum turn radius (half of 2-wheel-steering),
* the possibility that the rear wheels use the same trajectory as the front wheels (if both steering angles are the same)
* the possibility to move sidewards (up to 35 degrees to the longitudinal axis of the vehicle).

Normally the rear wheels are set to the same steering angle as the front wheels, so that the resulting trajectories are identical and the risk of obstacle contact is reduced. With this vehicle we have a very ﬂexible, mobile and powerful platform which additionally has the advantage of precise odometry.

## Sensors for Navigation and Localization

**Wheel Encoders:** To measure the translational and rotational speed of the vehicle, all four wheels are equipped with incremental optical encoders.

**Laser Scanner:** The Hokuyo URG04-LX laser scanner covers an arc of 240° with 0.36◦ resolution per scan. It has a maximum range of 4m and a maximum sample rate of 10Hz.

**Inertial Measurement Unit:** To get the attitude, the vehicle contains a 6DoFinertial sensor ADIS16350 by Analog Devices which measures accelerations and angular rates.

**Navigation ﬁlter:** All sensor information is fused to an overall estimation of position, velocity and attitude of the vehicle by using an extended Kalman ﬁlter. Our approach is to combine this two sources of information in a loosely-coupled way in order to gain a robust navigation solution.

## Sensors for Victim Identification

Victim detection will be approached from several complementary directons. With team members working in computer vision we plan to leverage their extensive experience and prior work. Signiﬁcant progress in visual object recognition and scene understanding now allows us to apply these methods to real-life conditions. The victim detection will be supported by the integration of other sensor types, like a thermal camera, CO2 -sensor or microphone.

**Vision-Based Recognition of Victims and Hazmat Symbols:** The recognition of the objects is performed by using a combination of visual cues based on the gradients of image intensity. Such cues can be eﬃciently captured by a descriptor based on the histograms of oriented gradients (see figure for illustration). First, the gradient magnitude and orientation are computed densely in the image. The local distributions of the gradient orientation are then captured by the histogram. Such histograms are then grouped with their neighbors and jointly normalized. The normalization and local pooling of gradient information signiﬁcantly improves the stability of the description to viewpoint changes, noise and changes in illumination.

The onboard computer with an nVidia graphic card allows real-time feature computation and recognition. We plan to use the recognition system for detection of hazmat symbols at the victim sites. The same system, but trained on the images of human body parts, will be used to recognize victims parts.

**Multi-Cue Victim Detection:** In addition to visual victim detection we will use a thermal camera as our secondary sensor. Thermal images often contain not only victims but also other warm objects, such as radiators or ﬁre, so that thermal and visual recognition systems will deliver complimentary information. For the ﬁnal victim veriﬁcation we will also use acoustic and CO2 sensors.
