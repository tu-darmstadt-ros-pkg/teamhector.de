---
name: Hector Tracker
dimensions: 100cm x 58cm x 42cm
weight: 70 kg
speed: 1.1 m/s
flipperDoF: 1 (Front)
manipulatorDoF: 6 (+ Gripper)
lidar: VLP-16 (Rotating)
cameras: 360° Camera, 2 RGB-D Cameras, Thermal Camera, Zoom Camera, Wide-Angle Camera
additionalSensors: IMU

active: false
firstUsed: 2016
lastUsed: 2018
image: hector_tracker.jpg
---
The Hector Tracker is a modified Taurob Tracker used by Team Hector for rescue robot research.
The base platform is equipped with rubber tracks and two flippers which can modify the track geometry in order to overcome obstacles.
In a compact arm configuration, the robot has the dimensions of 1 m x 0.58 m x 0.42 m and weighs 70 kg.

The tracked platform carries a modular autonomy box developed by Team Hector equipped with a continuously rotating lidar to create 3D point clouds and an omnidirectional camera.

The sensor head, which is mounted after the fifth joint of the arm, contains a thermal camera used to detect human victims or fires and a zoom camera for vision-related tasks such as object detection.

On top of the sensor head, a gripper made by Robotis is mounted with an additional roll joint. This yields a manipulator arm with 6 degrees of freedom and a reach of around 150cm.
The gripper is equipped with two cameras, a wide angle camera mainly used for teleoperation of the manipulator arm and an RGB-D camera creating depth images in close range.
