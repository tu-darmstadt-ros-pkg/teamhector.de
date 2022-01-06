---
name: Image Projection
image: image_projection.png
githubUser: tu-darmstadt-ros-pkg
githubRepo: image_projection
order: 100
---
The image_projection package allows to easily configure projections from multiple calibrated camera sources. A demo launch configuration is available. 

You can

* Rectify a distorted image
* Create a cylindrical projection (equirectangular, mercator …) from 360° camera data from multiple cameras
* Create a perspective (pinhole) projection from fisheye camera data
* Convert non-linear fisheye data to an ideal fisheye lense (“tru-theta”)
* Define a virtual pan-tilt camera

This software has been used extensively by Team Hector. We use the compact $50 360° camera Insta360 Air as a virtual pan-tilt camera and 360° object detection camera simultaneously.