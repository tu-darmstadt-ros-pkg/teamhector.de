# Building and running the website locally

1. [Install jekyll](https://jekyllrb.com/docs/installation/)
2. (Optional) Update gems including bundle
   ```
   sudo gem update
   ```
3. Install dependencies
   ```
   bundle install
   ```
4. Run
   ```
   bundle exec jekyll serve
   ```


# Adding content
## Competitions
Add competitions in the `_competition` folder.
Just copy one of the existing ones and change it accordingly.  
The `date` key is just used for sorting and is not accurate for all competitions (but please keep it accurate as the start date of new competitions).  
Add the image for the competition in `assets/images/competitions`.

## Open Source Projects
Add the entry in the `_opensource` folder.
The image has to be in `assets/images/opensource`.
Supported keys:

* `order` is used to order the projects. Higher values come first. Should reflect age and relevance of the package.
* `githubUser` and `githubRepo` are used to identify the package on github and automatically add the stars on github and a link to the repository.
  * You can also specify only `githubUser` if the entry is for a GitHub org and not a repository.
* `github` is an alternative to `githubUser` and `githubRepo`. If you don't want to display the stars, you can just provide the github link and the entry will only feature a GitHub badge with link to the repository.
* `roswiki` is the url to the wiki page in the ROS wiki and will add a badge link if set.

## Robots

Add robots in the `_robots` directory.
Keys:

* `name` The name of the robot
* `dimensions` The dimensions of the robot (LxWxH)
* `height` is only the height of the robot as an alternative to `dimensions`. If `dimensions` is set, this will not be used.
* `weight` in kg
* `speed` in m/s
* `doF` Degrees of Freedom (not recommended for non-humanoid systems because it's a useless statistic if the kinematic chains are mostly separate)
* `flipperDoF` Degrees of Freedom of flippers (usually 4 if 4 independent flippers, 2 (Front and Back) if they are not independent)
* `manipulatorDoF` Degrees of Freedom of the manipulator
* `lidar` The lidar that is used and whether it is mounted fixed or rotating
* `cameras` is a list of all relevant camera sensors on the system
* `additionalSensors` are other sensors not covered before such as IMU, GNSS or CO2 sensors.
* `locomotion` The type of locomotion. E.g. Wheels or Tracks
* `active` is whether the robot is still actively used or not
* `firstUsed` The first year this robot was used
* `lastUsed` is the last year in which this robot was used. Only relevant if `active` is false.
* `image` An image of the robot. Place it in `assets/images/robots`.

Apart from `name`,`image`, `active` and `firstUsed` all other keys are optional.

## Other content

The previous categories only require adding a markdown file and an image.  
If you want to change other parts of the site, you should familiarize yourself with jekyll and **test locally first**!  
All changes have to be made as pull requests!
