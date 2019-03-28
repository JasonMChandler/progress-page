# material-ui-progress-page

## Installation

npm i material-ui-progress-page

## Usage

import ProgressPage from 'material-ui-progress-page';

<ProgressPage />

Scroll down for props that are accepted

## description

A project progress page designed for freelancers to enable clients to see how their project is going.

### Basic elements

* Header for the title
* 3 tabs - hours - specifications - contract
* material ui stepper to show what step the project is on

## Tabs

Clicking a tab is there to display markdown text

## Props

|Prop name|Description|Type|Default|
|---|---|---|---|
|appBarProps   |   |object   |{ color: "primary", position: "fixed" }   |
|appBarDivProps   |   |object   |{ style: { marginTop: 8, width: "100%", display: "flex", alignItems: "center", justifyContent: "left" } }   |
|appBarTitleTypographyProps   |   |object   |{ component: "h2", variant: "h6", style: { marginLeft: 15, marginRight: 15, color: "white" } }   |
|sidePanelPaperProps   |   |object   |{ square: true, elevation: 2, style: { position: "fixed", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex", top: 0, left: 0, background: "#9d9ea0" } }   |
|contentAreaBigScreenProps   |   |object   |{ style: { marginTop: 88, minHeight: "100vh", flex: "100%", backgroundColor: "#eaeaea" } }   |
|contentAreaSmallScreenProps   |   |object   |{ style: { marginTop: 88, minHeight: "100vh", flex: "100%", backgroundColor: "#eaeaea" } }   |
|sidePanelTypographyProps   |   |object   |{ style: { transform: 'rotate(-90deg)', color: "#ffffff" }, component: "h2", variant: "h4" }   |
|paperStepperAreaSmallScreenProps   |   |object   |{ elevation: 8, square: true, style: { width: "100%" } }   |
|paperStepperAreaBigScreenProps   |   |object   |{ elevation: 8, square: true, style: { position: "fixed", bottom: 0, left: 0, height: 130, width: "100%" } }   |
|stepperSmallScreenProps   |   |object   |{}   |
|stepperBigScreenProps   |   |object   |{}   |
|stepSmallScreenProps   |   |object   |{}   |
|stepBigScreenProps   |   |object   |{}   |
|stepLabelSmallScreenProps   |   |object   |{}   |
|stepLabelBigScreenProps   |   |object   |{}   |
|sidePanelText   |defines the side panel text that's displayed on small screens   |array   |["Hours","Specs","Contract"]   |
|title   |defines the header title   |string   |'Project Progress'   |
|projectName   |defines the name of the project after the title   |string   |"Report"   |
|steps   |defines the names of the steps in the stepper component   |array of strings   |[""]   |
|step   |defines the current step in the stepper component   |number   |0   |
|tableArray   |defines the list of title - markdown contents for the "hours" table this is meant to list tasks  |array of objects  |[{ title: "", content: "" }]   |
|specs   |defines the markdown contents for the tab "specs"   |string   |""   |
|contract   |defines the markdown contents for the tab "contract"   |string   |""   |


