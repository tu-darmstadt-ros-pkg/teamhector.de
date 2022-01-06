---
name: Hector Localization
githubUser: tu-darmstadt-ros-pkg
githubRepo: hector_localization
roswiki: http://wiki.ros.org/hector_localization
order: 20
---
The hector_localization stack is a collection of packages, that provide the full 6DOF pose of a robot or platform.
It uses various sensor sources, which are fused using an Extended Kalman filter.
Acceleration and angular rates from an inertial measurement unit (IMU) serve as primary measurements.
The usage of other sensors is application-dependent.
The hector_localization stack currently supports GPS, magnetometer, barometric pressure sensors and other external sources that provide a geometry_msgs/PoseWithCovariance message via the poseupdate topic (e.g. from hector_slam).
