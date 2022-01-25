# SL 3D-Viewer

This widget can be used to view 3d models in .xkt-format.

## 1. Description

This widget can be used to view 3d models in .xkt-format. It comes bundled with optional component widgets that allow manipulation of the view such as showing annotations, navigation of the camera, highlighting parts of the 3D-model, measuring parts. To use this widget you will need to aquire an API-key through ..... or run it locally. The widget can be used in material passports, building guidance applications, product designing applications or used for marketing in architectual applications.

### 1.1 Contents
<table><tbody><tr><td>Widget component</td><td>Description</td></tr>
<tr><td>[Viewer Container](http://www.google.com)</td><td>The container widget where every other widget should be placed within which is mandatory</td></tr>
<tr><td>[Viewer](http://www.google.com)</td><td>The widget which holds the reference to the object that represents the 3D-model.</td></tr>
<tr><td>[Navigation Cube](http://www.google.com)</td><td>A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model and snapping</td></tr>
<tr><td>[Annotation Widget](http://www.google.com)</td><td>A widget which allows you to show annotations</td></tr>
<tr><td>[Xray Widget](http://www.google.com)</td><td>A widget which allows you to toggle partial visibility of the 3D-model</td></tr>
<tr><td>[Measurement](http://www.google.com)</td><td>Allows a user to measure dimensions or angles of the 3D-model</td></tr>
<tr><td>[Camera Navigation](http://www.google.com)</td><td>Allows you to influence how the user interacts with the camera of the viewer.</td></tr>
<tr><td>[Camera Control](http://www.google.com)</td><td>Allows you to influence camera settings of the viewer.</td></tr>
<tr><td>[Reset Viewer Button](http://www.google.com)/td><td>Used reset the viewer to how it was initialized on page load</td></tr>
<tr><td>[Tree View Hierarchy](http://www.google.com)/td><td>Used to display a treeview hierarchy which indicates the treeview order</td></tr>
<tr><td>[Tree view](http://www.google.com)/td><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr>
<tr><td>[Highlight Objects](http://www.google.com)/td><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr>
</tbody></table>

### 1.2 Browser example
<table><tbody><tr><td>Example 1</td><td>Example 2</td><td>Example 3</td></tr><tr><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer/images/viewer_browser_example.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer/images/viewer_browser_example2.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer/images/viewer_browser_example3.png" width="300"></td></tr></tbody></table>

## 2. Usage

* Place a viewer container in a dataview that contains a 3D-model
* Add the API-key aquired from .... . If you want to test a 3d model locally you don't need an API-key.
* Place the viewer widget inside the viewer container.
* Select an entity that holds the XKT-model file (which you provide to the dataview the Viewer Container is nested in). 

### 2.1 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer/images/viewer_modeler_example.png" width="600"/>


### 2.2 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer-container/images/viewercontainer_general_tab.png" width="600"/>

* Configure the API-key, if the API-key field is empty the widget will only work locally.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-viewer/main/docs/viewer/images/viewer_general_tab.png" width="600"/>
* Select the entity that holds the XKT model file
* You can optionally specify the visible objects.


## 3. Use Cases

* Material passports
* Product design
* Construction guidance
* Inspection and planning applications
* Marketing in architectual applications

## 4. Widget Components
All widget components are optional but require the viewer container widget and the viewer widget to work.
### 4.1 Navigation Cube
#### 4.1.1 Description
A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model and snapping
#### 4.1.2 Modeler example
#### 4.1.3 Configuration example
#### 4.1.4 Use cases

To customize the content-container you can edit the styling with css using the classname:

* .sl-popover-content
