import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';

"use strict";
const sidePanelWidth = 50;
const styles = theme => ({
    sidePanel: { width: sidePanelWidth },
    sidePanelMargin: { marginLeft: sidePanelWidth },
});

const options = {
    overrides: {
        h1: { component: props => <Typography gutterBottom variant="h5" {...props} /> },
        h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
        h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
        h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
        p: { component: props => <Typography  variant="body1" paragraph {...props} /> },
        li: {
            component: props => (
                <li>
          <Typography component="span" {...props} />
        </li>
            ),
        },
    },
};

function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}

class ContentArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tab: 0 };

    }
    tabsFunction = (event, value) => {
        this.setState({ tab: value })
    };
    render() {

        var { classes } = this.props;
        return (<React.Fragment>
<AppBar {...this.props.appBarProps} >
<div {...this.props.appBarDivProps}><Typography {...this.props.appBarTitleTypographyProps}>
{this.props.title+": "+this.props.projectName}
</Typography>
</div>
<div style={{ width:"100%", display:"flex", alignItems:"flex-end", justifyContent:"left"}}>
<Tabs value={this.state.tab} onChange={this.tabsFunction}>
<Tab key={1} label="Hours" />
<Tab key={2} label="Specs" />
<Tab key={3} label="Contract" />
</Tabs>
</div>
</AppBar>
          <div style={{width:"100%"}}><Hidden xsDown><Paper className={classes.sidePanel} {...this.props.sidePanelPaperProps}><Typography >{this.props.sidePanelText[this.state.tab]}</Typography></Paper></Hidden><div>
          <Hidden xsDown>
          <div className={classes.sidePanelMargin} {...this.props.contentAreaBigScreenProps}>
          {this.state.tab === 0 ? this.props.tableArray.map(function (item, index) {
              return <div key={"infotablelist "+index} style={{padding:15}}>
          
                  <Markdown>{"\n "+item.title}</Markdown>
          
                  <Markdown>{"\n"+item.content}</Markdown>
          </div>
              
            }.bind(this)) : null}
          {this.state.tab === 1 ? <div style={{padding:15}}><Markdown>{"\n"+this.props.specs}</Markdown></div> : null}
          {this.state.tab === 2 ? <div style={{padding:15}}><Markdown>{"\n"+this.props.contract}</Markdown></div> : null}

          </div>
          </Hidden>
          
          <Hidden smUp>
          <div {...this.props.contentAreaSmallScreenProps}>
          {this.state.tab === 0 ? this.props.tableArray.map(function (item, index) {
              return <div key={"infotablelist "+index} style={{padding:15}}>
          
                  <Markdown>{"\n"+item.title}</Markdown>
          
                  <Markdown>{"\n"+item.content}</Markdown>
          </div>
              
            }.bind(this)) : null}
          {this.state.tab === 1 ? <div style={{padding:15}}><Markdown>{"\n"+this.props.specs}</Markdown></div> : null}
          {this.state.tab === 2 ? <div style={{padding:15}}><Markdown>{"\n"+this.props.contract}</Markdown></div> : null}

          </div>
          </Hidden>
        </div></div>
          <Hidden smUp>
          <Paper {...this.props.paperStepperAreaSmallScreenProps}>


                  <Stepper activeStep={this.props.step} orientation="vertical" {...this.props.stepperSmallScreenProps} >
          {this.props.steps.map(label => (
            <Step key={label} {...this.props.stepSmallScreenProps}>
              <StepLabel {...this.props.stepLabelSmallScreenProps}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
          </Paper>
          </Hidden>
      <Hidden xsDown>
      <Paper {...this.props.paperStepperAreaBigScreenProps}>

          <Stepper activeStep={this.props.step} alternativeLabel {...this.props.stepperBigScreenProps}>
          {this.props.steps.map(label => (
            <Step key={label} {...this.props.stepBigScreenProps}>
              <StepLabel {...this.props.stepLabelBigScreenProps}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

      </Paper>
      </Hidden>
        </React.Fragment>)
    }
}
ContentArea.propTypes = {
    appBarProps: PropTypes.object,

    appBarDivProps: PropTypes.object,
    appBarTitleTypographyProps: PropTypes.object,
    sidePanelPaperProps: PropTypes.object,
    sidePanelTypographyProps: PropTypes.object,
    contentAreaBigScreenProps: PropTypes.object,
    contentAreaSmallScreenProps: PropTypes.object,
    paperStepperAreaBigScreenProps: PropTypes.object,
    paperStepperAreaSmallScreenProps: PropTypes.object,
    stepperSmallScreenProps: PropTypes.object,
    stepperBigScreenProps: PropTypes.object,
    stepSmallScreenProps: PropTypes.object,
    stepBigScreenProps: PropTypes.object,
    stepLabelSmallScreenProps: PropTypes.object,
    stepLabelBigScreenProps: PropTypes.object,

    sidePanelText: PropTypes.array,
    title: PropTypes.string,
    projectName: PropTypes.string,
    steps: PropTypes.array,
    step: PropTypes.number,
    tableArray: PropTypes.array,
    specs: PropTypes.string,
    contract: PropTypes.string,
};
ContentArea.defaultProps = {
    appBarProps: { color: "primary", position: "fixed" },
    appBarDivProps: { style: { marginTop: 8, width: "100%", display: "flex", alignItems: "center", justifyContent: "left" } },

    appBarTitleTypographyProps: { component: "h2", variant: "h6", style: { marginLeft: 15, marginRight: 15, color: "white" } },
    sidePanelPaperProps: { square: true, elevation: 2, style: { position: "fixed", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex", top: 0, left: 0, background: "#9d9ea0" } },
    contentAreaBigScreenProps: { style: { marginTop: 88, minHeight: "100vh", flex: "100%", backgroundColor: "#eaeaea" } },
    contentAreaSmallScreenProps: { style: { marginTop: 88, minHeight: "100vh", flex: "100%", backgroundColor: "#eaeaea" } },
    sidePanelTypographyProps: { style: { transform: 'rotate(-90deg)', color: "#ffffff" }, component: "h2", variant: "h4" },
    paperStepperAreaSmallScreenProps: { elevation: 8, square: true, style: { width: "100%" } },
    paperStepperAreaBigScreenProps: { elevation: 8, square: true, style: { position: "fixed", bottom: 0, left: 0, height: 130, width: "100%" } },
    stepperSmallScreenProps: {},
    stepperBigScreenProps: {},
    stepSmallScreenProps: {},
    stepBigScreenProps: {},
    stepLabelSmallScreenProps: {},
    stepLabelBigScreenProps: {},
    sidePanelText: ["Hours","Specs","Contract"],
    title: 'Project Progress',
    projectName: "Report",
    steps: [""],
    step: 0,
    tableArray: [{ title: "", content: "" }],
    specs: "",
    contract: "",
};
export default withStyles(styles)(ContentArea);