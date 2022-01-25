# SL 3D-Viewer

This widget can be used to view 3d models in .xkt-format.

## 1. Description

This widget can be used to view 3d models in .xkt-format. It comes bundled with optional component widgets which make this wiget highly customizable and allow manipulation of the view such as showing annotations, navigation of the camera, highlighting parts of the 3D-model, measuring parts. To use this widget you will need to aquire an API-key through ..... or run it locally. The widget can be used in material passports, building guidance applications, product designing applications or used for marketing in architectual applications.

### 1.1 Contents
<table><tbody><tr><td>Widget component</td><td>Description</td></tr>
<tr><td>
 <a href="https://www.google.com">Viewer container</a></td><td>The container widget where every other widget should be placed within which is mandatory</td></tr>
<tr><td><a href="https://www.google.com">Viewer</a></td><td>The widget which holds the reference to the object that represents the 3D-model.</td></tr>
<tr><td><a href="#41-Navigation-Cube">Navigation cube</a></td><td>A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model and snapping</td></tr>
<tr><td><a href="#42-Annotations">Annotations</a></td><td>A component widget which allows you to show annotations</td></tr>
<tr><td><a href="#43-Xray-Objects">Xray Objects</a></td><td>A component widget which allows you to toggle partial visibility of the 3D-model</td></tr>
<tr><td>[Measurement](http://www.google.com)</td><td>Allows a user to measure dimensions or angles of the 3D-model</td></tr>
<tr><td>[Camera Navigation](http://www.google.com)</td><td>Allows you to influence how the user interacts with the camera of the viewer.</td></tr>
<tr><td>[Camera Control](http://www.google.com)</td><td>Allows you to influence camera settings of the viewer.</td></tr>
<tr><td>[Reset Viewer Button](http://www.google.com)/td><td>Used reset the viewer to how it was initialized on page load</td></tr>
<tr><td>[Tree View Hierarchy](http://www.google.com)/td><td>Used to display a treeview hierarchy which indicates the treeview order</td></tr>
<tr><td>[Tree view](http://www.google.com)/td><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr>
<tr><td>[Highlight Objects](http://www.google.com)/td><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr>
</tbody></table>

### 1.2 Browser example
<table><tbody><tr><td>Example 1</td><td>Example 2</td><td>Example 3</td></tr><tr><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example2.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example3.png" width="300"></td></tr></tbody></table>

## 2. Usage

* Place a viewer container in a dataview that contains a 3D-model
* Add the API-key aquired from .... . If you want to test a 3d model locally you don't need an API-key.
* Place the viewer widget inside the viewer container.
* Select an entity that holds the XKT-model file (which you provide to the dataview the Viewer Container is nested in). 

### 2.1 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_modeler_example.png" width="600"/>


### 2.2 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer-container/viewercontainer_general_tab.png" width="600"/>

* Configure the API-key, if the API-key field is empty the widget will only work locally.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_general_tab.png" width="600"/>

* Select the entity that holds the XKT model file
* You can optionally specify the visible objects.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_event_tab.png" width="600"/>

* You can assign a Mendix-action when a user selects an object.
* You can assign a Mendix-action when the page is finished loading the model.

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
A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model. You can also click one of the sides to snap to that part of the 3D-model.
#### 4.1.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_browser_example.png" width="300"/>

#### 4.1.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_modeler_example.png" width="600"/>

#### 4.1.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_tab_general" width="600"/>
* Place the Navigation Cube inside the Viewer Container
* You can specify the colors of the cube by using hex codes

#### 4.2 Annotations
#### 4.2.1 Description
A widget which allows you to show annotations or markers on a model. To accopmlish this you will need a list of model objects.
The model objects will need an ObjectID
#### 4.2.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_browser_example.png" width="300"/>

#### 4.2.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_modeler_example.png" width="600"/>


#### 4.2.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_tab_general" width="600"/>
* Place the Annotations widget inside the Viewer Container
* Specify the data source that returns the model objects that you want to show in the annotation
* You can specify when the label is shown.

#### 4.3 Xray-Objects
#### 4.3.1 Description
This widget allows you to toggle parts of the 3D-model transparent which allows you to see the objects behind.
#### 4.3.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xrayobjects/xrayobjects_browser_example.png" width="500"/>

#### 4.3.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xrayobjects/xrayobjects_modeler_example.png" width="600"/>


#### 4.3.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xrayobjects/xrayobjects_tab_general" width="600"/>
* Place the Xray Objects widget inside the Viewer Container
* Specify wether or not the controls are visible for the user.
* Specify when objects will be toggled invisible 
* Xray objects: You can specify a datasource that will recieve the Object from the parent datasource as input parameter and expects a list of Objects as a return. You will have to specify the object ID attribute if you use this.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xrayobjects/xrayobjects_tab_xraysettings" width="600"/>
* This tab specifies how the Xrayed item is rendered in the browser

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xrayobjects/xrayobjects_tab_labels" width="600"/>
* This tab allows you to customize the display text shown to the user
