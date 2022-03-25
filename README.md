# SL 3D-Viewer

This widget can be used to view 3d models and use these models in your organisational processes.

## 1\. Description

This widget can be used to view 3d models. The widget natively supports ``.xkt`` format. If you wan to view formats such as ``ifc`` you can convert this file with our converter service located at ....... The widget comes bundled with optional component widgets which make this widget highly customizable. The widget components allow manipulation of the view such as showing annotations, navigation of the camera, highlighting parts of the 3D-model, measuring model-objects. To use this widget in a deployed environment you will need to aquire an licence key through ..... or run it locally. The widget can be integrated in apps to facilitate processes that deal with products and buildings.

For an example login in our <a href="https://sl3dviewerdemoapp-sandbox.mxapps.io/">Demo app</a> with Username:``User`` and Password: ``Simplylogic``

### 1.1 Contents

<table><tbody><tr><td><b>Widget component</b></td><td>Description</td></tr><tr><td><a href="12-Browser-example">Viewer container</a></td><td>The container widget where every other widget should be placed within which is mandatory</td></tr><tr><td><a href="12-Browser-example">Viewer</a></td><td>The widget which holds the reference to the object that represents the 3D-model.</td></tr><tr><td><a href="#41-Navigation-Cube">4.1 Navigation cube</a></td><td>A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model and snapping</td></tr><tr><td><a href="#42-Annotations">4.2 Annotations</a></td><td>A component widget which allows you to show annotations</td></tr><tr><td><a href="#43-Xray-Objects">4.3 Xray Objects</a></td><td>A component widget which allows you to toggle partial visibility of the 3D-model</td></tr><tr><td><a href="#44-Measurement">4.4 Measurement</a></td><td>Allows a user to measure dimensions or angles of the 3D-model</td></tr><tr><td><a href="#45-Camera-Navigation">4.5 Camera Navigation</a></td><td>Allows you to customize how the user interacts with the camera of the viewer.</td></tr><tr><td><a href="#46-Camera-Control">4.6 Camera Control</a></td><td>Allows you to customize camera settings of the viewer.</td></tr><tr><td><a href="#47-Reset-Viewer">4.7 Reset Viewer</a></td><td>Used reset the viewer to how it was initialized on page load</td></tr><tr><td><a href="#48-Treeview-Hierarchy">4.8 Treeview Hierarchy</a></td><td>Used to display a treeview hierarchy which indicates the treeview order</td></tr><tr><td><a href="#49-Treeview">4.9 Treeview</a></td><td>Used to display elements from the 3D-model in a treeview and toggle visibility</td></tr><tr><td><a href="#410-Highlight-Objects">4.10 Highlight Objects</a></td><td>Used to highlight objects in the 3D-model when selecting through hovering/clicking</td></tr><tr><td><a href="#411-Explode">4.11 Explode</a></td><td>Used to explode the model to interact with inner objects</td></tr></tbody></table>

### 1.2 Browser example

<table><tbody><tr><td>Example 1</td><td>Example 2</td><td>Example 3</td></tr><tr><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example2.png" width="300"></td><td><img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_browser_example3.png" width="300"></td></tr></tbody></table>

## 2\. Usage

* Place a viewer container in a dataview that contains a 3D-model with an .xkt extension.
* Add the licence key acquired from .... . If you want to test a 3d model locally you don't need an licence key but this value needs to be filled.
* Place the viewer widget inside the viewer container.
* Select an entity that holds the XKT-model file (which you provide to the dataview the Viewer Container is nested in).
* Add any widget component to the viewer container to customize to your likings.

### 2.1 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_modeler_example.png" width="600">

* The viewer needs to be nested inside the viewer container.
* The viewer requires a dataview object.

### 2.2 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer-container/viewercontainer_general_tab.png" width="600">

* Configure the licence key, if you want to test the widget locally provide a any string.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_general_tab.png" width="600">

* Select the entity that holds the XKT model file
* You can optionally specify the visible objects. This can be used if you only want to show a part of a 3D-model. If you use this you will have to specify a reference to an attribute that stores the object model-id.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/viewer_event_tab.png" width="600">

* You can assign a Mendix-action when a user selects an object inside of the model.
* You can specify from which string in JSON-format the model objects is constructed from.
* You can assign a Mendix-action when model is loaded. Normally this will be a microflow where you import your model objects from the string with for example an import mapping shown below.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/viewer/import_mapping.png" width="600">

## 3\. Use Cases

* Make product design processes insightfull to non-technical employees.
* Check on the availability of a part from a model and manage your supply.
* Usage in inspection apps to manage the status of an asset or object.

## 4\. Widget Components

All widget components are optional but require the viewer container widget and the viewer widget to be functional

### 4.1 Navigation Cube

#### 4.1.1 Description

A navigation cube which can be interacted with by dragging which allows for rotation of the 3D-model. You can also click one of the sides/edges to snap to that side of the 3D-model.

#### 4.1.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_browser_example.png" width="200">

#### 4.1.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_modeler_example.png" width="600">

#### 4.1.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/navigation-cube/navigationcube_general_tab.png" width="600">

* Place the Navigation Cube inside the Viewer Container
* You can specify the colors of the cube by using hexadecimal color notation.

### 4.2 Annotations

#### 4.2.1 Description

A widget which allows you to show annotations on objects of a model. To accopmlish this you will need a list of model objects.
The model objects will need an ObjectID

#### 4.2.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_browser_example.png" width="300">

#### 4.2.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_modeler_example.png" width="600">

#### 4.2.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/annotations/annotations_general_tab.png" width="600">

* Place the Annotations widget inside the Viewer Container
* Specify the datasource that returns the model objects that you want to show in the annotation
* The container will receive the context of the model-object.
* You can specify when the label is shown.

### 4.3 Xray-Objects

#### 4.3.1 Description

This widget allows you to toggle parts of the 3D-model transparent which allows you to see the objects behind.

#### 4.3.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_browser_example.png" width="500">

#### 4.3.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_modeler_example.png" width="600">

#### 4.3.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_general_tab.png" width="600">

* Place the Xray Objects widget inside the Viewer Container
* Specify whether or not the controls are visible for the user.
* Specify when objects will be displayed x-rayed.
* Xray objects: You can specify a datasource that will recieve the Object from the parent datasource as input parameter and expects a list of Objects as a return. You will have to specify the object ID attribute if you use this. This can be used if you want to X-ray an entire model.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_xraysettings_tab.png" width="600">

* This tab specifies how the Xrayed item is rendered in the browser

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/xray-objects/xrayobjects_labels_tab.png" width="600">

* This tab allows you to customize the UI component shown to the user, here you can translate the labels into a language of your liking.

### 4.4 Measurement

#### 4.4.1 Description

This widget allows you to measure parts of the 3D-model. It allows you to measure lengths and angles. Uses Metric system.

#### 4.4.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_browser_example.png" width="300"> <img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_ui_example.png" width="300">

#### 4.4.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_modeler_example.png" width="600">

#### 4.4.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_general_tab.png" width="600">

* Place the Measurement widget inside the Viewer Container
* Specify whether or not the controls are visible for the user and how it renders for the user.
* Specify the default measurement mode.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/measurement/measurement_labels_tab.png" width="600">

* This specifies the labels for the UI component that is shown to the user.

### 4.5 Camera Navigation

#### 4.5.1 Description

Allows you to influence how the user interacts with the camera of the viewer

#### 4.5.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_ui_example.png" width="300">

#### 4.5.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_modeler_example.png" width="600">

#### 4.5.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-navigation/cameranavigation_general_tab.png" width="600">

* Place the Camera Navigation inside the Viewer Container
* Allows you to configure the navigation mode of the camera.
* This specifies how the camera navigation is shown to the user.

### 4.6 Camera Position

#### 4.6.1 Description

Allows you to save the camera position

#### 4.6.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_ui_example.png" width="300">

#### 4.6.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_modeler_example.png" width="600">

#### 4.6.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/camera-position/cameraposition_general_tab.png" width="600">

* Place the Camera Navigation inside the Viewer Container
* Shows a button which passes the model object to a microflow so you can save the camera position to an object.
* Read the positions from the strings provided
* position is a string formatted as: ```int;int;int```

### 4.7 Reset Viewer

#### 4.7.1 Description

Used reset the viewer to how it was initialized on page load, including highlighted items, x-rayed items, measurements and the camera position.

#### 4.7.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_ui_example.png" width="300">

#### 4.7.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_modeler_example.png" width="600">

#### 4.7.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/reset-viewer/resetviewer_general_tab.png" width="600"> \

* Place the Reset Viewer inside the Viewer Container
* Customize the label according to your preferences

### 4.8 Treeview Hierarchy

#### 4.8.1 Description

Used to display a treeview hierarchy which indicates how the treeview component is displayed

#### 4.8.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_ui_example.png" width="300">

#### 4.8.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_modeler_example.png" width="600">

#### 4.8.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_general_tab.png" width="600"> <img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview-hierarchy/treeview_hierarchy_labels_tab.png" width="600">

* Place the Treeview Hierarchy inside the Viewer Container
* Place the Treeview inside the Viewer Container
* Customize how the treeview hierarchy is viewed and what the default display mode for the treeview will be.
    * Objects means that the treenodes are organized based on the object they are contained in.
    * Types means that the treenodes are organized based on object-type (this is usefull for models converted from .ifc)
    * Storeys means that the treenodes are organized based on the storeys and then on type.

### 4.9 Treeview

#### 4.9.1 Description

Used to display a treeview of objects/types/storey's depending on how the Treeview Hierarchy is configured. Gives the user an overview of the available objects/types/storey's. Allows you to toggle objects as visible/invisible in the 3D-Model.

#### 4.9.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview/treeview_ui_example.png" width="300">

#### 4.9.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/treeview/treeview_modeler_example.png" width="600">

#### 4.9.4 Configuration example

* Place the Treeview Hierarchy inside the Viewer Container
* Place the Treeview inside the Viewer Container


### 4.10 Highlight Objects

#### 4.10.1 Description

Used to highlight objects in the 3D-model when selecting through hovering/clicking

#### 4.10.2 Browser example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_ui_example.png" width="300">

#### 4.10.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_modeler_example.png" width="600">

#### 4.10.4 Configuration example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_general_tab.png" width="600">

* Place the Highlight Objects inside the Viewer Container
* The controls indicate whether or not the controls are visible to the user and how these are displayed
* The interactions indicate which highlight mode is selected.
* You can also provide a datasource of model objects to this widget that will be highlighted, this can be used to highlight a list of items.

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_highlightsettings_tab.png" width="600">

* Customize how an object is higlighted

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/highlight-objects/highlightobjects_labels_tab.png" width="600">

* Customize how the labels in the UI are displayed for the user.

### 4.11 Explode

#### 4.11.1 Description

Used to explode the model to interact with inner model-objects.

#### 4.11.2 Browser example

<img src="https://github.com/simplylogicninjas/sl-widgets-3dviewer/blob/main/docs/images/explode/Explode.gif" width="600">


#### 4.11.3 Modeler example

<img src="https://raw.githubusercontent.com/simplylogicninjas/sl-widgets-3dviewer/main/docs/images/explode/explode_modeler_example.png" width="600">

* Place the Explode widget inside the Viewer Container