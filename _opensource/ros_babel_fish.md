---
name: ROS Babel Fish
githubUser: StefanFabian
githubRepo: ros_babel_fish
order: 90
---
The ROS Babel Fish library allows introspection into ROS messages and to communicate from C++ using ROS message types that are unknown at compile time.

It is a very efficient and versatile implementation that keeps the message tree intact.
Possible use cases include:

* Efficient plug-ins for (script) languages that can not access the C++ message definitions
* One- or Two-Way Conversion from ROS messages to other formats such as JSON that work for any message type including at compile time unknown types
