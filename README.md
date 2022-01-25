# SL 3D-Viewer

This widget can be used to view 3d models in .xkt-format.

## 1. Description

This widget can be used to view 3d models in .xkt-format. It comes bundled with optional component widgets which make this widget highly customizable. The widget components allow manipulation of the view such as showing annotations, navigation of the camera, highlighting parts of the 3D-model, measuring parts. To use this widget in a deployed environment you will need to aquire an API-key through ..... or run it locally. The widget can be used in material passports, building guidance applications, product designing applications or used for marketing in architectual applications.

### 1.1 Contents
<table><tbody><tr><td><b>Widget component</td><td>Description</b></td></tr>
<tr><td>
 <a href="12-Browser-example">Viewer container</a></td><td>The container widget where every other widget should be placed within which is mandatory</td></tr>
<tr><td><a href="12-Browser-example">Viewer</a></td><td>The widget which holds the reference to the object that represents the 3D-model.</td></tr>
<tr><td><a href="#41-Navigation-Cube">4.1 Navigation cube</a></td><td>A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model and snapping</td></tr>
<tr><td><a href="#42-Annotations">4.2 Annotations</a></td><td>A component widget which allows you to show annotations</td></tr>
<tr><td><a href="#43-Xray-Objects">4.3 Xray Objects</a></td><td>A component widget which allows you to toggle partial visibility of the 3D-model</td></tr>
<tr><td><a href="#44-Measurement">4.4 Measurement</a></td><td>Allows a user to measure dimensions or angles of the 3D-model</td></tr>
<tr><td><a href="#45-Camera-Navigation">4.5 Camera Navigation</a></td><td>Allows you to customize how the user interacts with the camera of the viewer.</td></tr>
<tr><td><a href="#46-Camera-Control">4.6 Camera Control</a></td><td>Allows you to customize camera settings of the viewer.</td></tr>
<tr><td><a href="#47-Reset-Viewer">4.7 Reset Viewer</a></td><td>Used reset the viewer to how it was initialized on page load</td></tr>
<tr><td><a href="#48-Treeview-Hierarchy">4.8 Treeview Hierarchy</a></td><td>Used to display a treeview hierarchy which indicates the treeview order</td></tr>
<tr><td><a href="#49-Treeview">4.9 Treeview</a><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr>
<tr><td><a href="#410-Highlight-Objects">4.10 Highlight Objects</a></td><td>Used to highlight objects in the 3D-model when selecting through hovering/clicking</td></tr>
</tbody></table>

### 1.2 Browser example
<table><tbody><tr><td>Example 1</td><td>Example 2</td><td>Example 3</td></tr><tr><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example2.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example3.png" width="300"></td></tr></tbody></table>

## 2. Usage

* Place a viewer container in a dataview that contains a 3D-model with an .xkt extension.
* Add the API-key aquired from .... . If you want to test a 3d model locally you don't need an API-key.
* Place the viewer widget inside the viewer container.
* Select an entity that holds the XKT-model file (which you provide to the dataview the Viewer Container is nested in). 
* Add any widget component to the viewer container to customize to your likings.

### 2.1 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_modeler_example.png" width="600"/>

* The viewer needs to be nested inside the viewer container.
* The viewer requires a dataview object from the pagecontext.


### 2.2 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer-container/viewercontainer_general_tab.png" width="600"/>

* Configure the API-key, if the API-key field is empty the widget will only work locally.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_general_tab.png" width="600"/>

* Select the entity that holds the XKT model file
* You can optionally specify the visible objects. This can be used if you only want to show a part of a 3D-model.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_event_tab.png" width="600"/>

* You can assign a Mendix-action when a user selects an object inside of the model.
* You can specify which attribute will hold the meta data in JSON-format.
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
A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model. You can also click one of the sides/edges to snap to that side of the 3D-model.
#### 4.1.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_browser_example.png" width="200"/>

#### 4.1.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_modeler_example.png" width="600"/>

#### 4.1.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_general_tab.png" width="600"/>

* Place the Navigation Cube inside the Viewer Container
* You can specify the colors of the cube by using hexadecimal colornotation.

### 4.2 Annotations
#### 4.2.1 Description
A widget which allows you to show annotations or markers on a model. To accopmlish this you will need a list of model objects.
The model objects will need an ObjectID
#### 4.2.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_browser_example.png" width="300"/>

#### 4.2.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_modeler_example.png" width="600"/>


#### 4.2.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_general_tab.png" width="600"/>

* Place the Annotations widget inside the Viewer Container
* Specify the data source that returns the model objects that you want to show in the annotation
* You can specify when the label is shown.

### 4.3 Xray-Objects
#### 4.3.1 Description
This widget allows you to toggle parts of the 3D-model transparent which allows you to see the objects behind.
#### 4.3.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_browser_example.png" width="500"/>

#### 4.3.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_modeler_example.png" width="600"/>


#### 4.3.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_general_tab.png" width="600"/>

* Place the Xray Objects widget inside the Viewer Container
* Specify wether or not the controls are visible for the user.
* Specify when objects will be toggled invisible 
* Xray objects: You can specify a datasource that will recieve the Object from the parent datasource as input parameter and expects a list of Objects as a return. You will have to specify the object ID attribute if you use this. This can be used if you want to X-ray an entire model.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_xraysettings_tab.png" width="600"/>

* This tab specifies how the Xrayed item is rendered in the browser

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_labels_tab.png" width="600"/>

* This tab allows you to customize the UI component shown to the user

### 4.4 Measurement
#### 4.4.1 Description
This widget allows you to measure parts of the 3D-model. It allows you to measure lengths and angles. Uses Metric system.
#### 4.4.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_browser_example.png" width="300"/>
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_ui_example.png" width="300"/>

#### 4.4.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_modeler_example.png" width="600"/>


#### 4.4.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_general_tab.png" width="600"/>

* Place the Measurement widget inside the Viewer Container
* Specify wether or not the controls are visible for the user and how it renders for the user.
* Specify the default measurement mode.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_labels_tab.png" width="600"/>

* This specifies the labels for the UI component that is shown to the user.

### 4.5 Camera Navigation
#### 4.5.1 Description
Allows you to influence how the user interacts with the camera of the viewer
#### 4.5.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_ui_example.png" width="300"/>

#### 4.5.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_modeler_example.png" width="600"/>


#### 4.5.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_general_tab.png" width="600"/>

* Place the Camera Navigation inside the Viewer Container
* Allows you to configure the navigation mode of the camera.
* This specifies how the camera navigation is shown to the user.

### 4.6 Camera Position
#### 4.6.1 Description
Allows you to save the camera position
#### 4.6.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_ui_example.png" width="300"/>

#### 4.6.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_modeler_example.png" width="600"/>


#### 4.6.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_general_tab.png" width="600"/>

* Place the Camera Navigation inside the Viewer Container
* Shows a button which passes the model object to a microflow so you can save the camera position to an object.
* Read the positions from the strings provided
- position is a string formatted as: ```int;int;int ```

### 4.7 Reset Viewer
#### 4.7.1 Description
Used reset the viewer to how it was initialized on page load
#### 4.7.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_ui_example.png" width="300"/>

#### 4.7.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_modeler_example.png" width="600"/>


#### 4.7.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_general_tab.png" width="600"/>
* Place the Reset Viewer inside the Viewer Container
* Customize the label according to your preferences

### 4.8 Treeview Hierarchy
#### 4.8.1 Description
Used to display a treeview hierarchy which indicates how the treeview component is displayed
#### 4.8.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_ui_example.png" width="300"/>

#### 4.8.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_modeler_example.png" width="600"/>


#### 4.8.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_general_tab.png" width="600"/>
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_labels_tab.png" width="600"/>

* Place the Treeview Hierarchy inside the Viewer Container
* Place the Treeview inside the Viewer Container
* Customize how the treeview hierarchy is viewed and what the default display mode for the treeview will be.

### 4.9 Treeview
#### 4.9.1 Description
Used to display a treeview of objects/types/storey's depending on how the Treeview Hierarchy is configured. Gives the user an overview of the available objects/types/storey's. Allows you to toggle objects as visible/invisible in the 3D-Model.
#### 4.9.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview/treeview_ui_example.png" width="300"/>

#### 4.9.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview/treeview_modeler_example.png" width="600"/>


#### 4.9.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview/treeview_general_tab.png" width="600"/>

* Place the Treeview Hierarchy inside the Viewer Container
* Place the Treeview inside the Viewer Container
* Customize the behaviour of clicking on an item in the treeview.

### 4.10 Highlight Objects
#### 4.10.1 Description
Used to highlight objects in the 3D-model when selecting through hovering/clicking
#### 4.10.2 Browser example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_ui_example.png" width="300"/>

#### 4.10.3 Modeler example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_modeler_example.png" width="600"/>


#### 4.10.4 Configuration example
<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_general_tab.png" width="600"/>

* Place the Highlight Objects inside the Viewer Container
* The controls indicate wether or not the controls are visible to the user and how these are displayed
* The interactions indicate which highlight mode is seelcted.
* You can also provide a datasource of model objects to this widget that will be highlighted, this can be used to highlight a list of items that is currently not in stock for example.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_highlightsettings_tab.png" width="600"/>

* Customize how an object is higlighted

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_labels_tab.png" width="600"/>

* Customize how the labels in the UI are displayed for the user.





