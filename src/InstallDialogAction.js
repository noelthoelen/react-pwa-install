import React from "react";
import { DialogActions, Typography, Button, Box } from "@material-ui/core";
import { platforms } from "./Platforms";
import { getLabel } from "./Translations";
import { IOSShareIcon, FireFoxA2HSIcon, MenuIcon, OperaA2HSIcon } from "./Icons";

function DialogActionWithInstructions(props) {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box>
        <Typography variant="subtitle1">{getLabel("instructions", props.language)}</Typography>
        <ul>
          <li>
            <span style={{ display: "flex", alignItems: "center" }}>{props.action1}</span>
          </li>
          <li>{props.action2}</li>
        </ul>
      </Box>
      <Box width="100%" textAlign="right">
        <Button onClick={props.onSubmit}>{getLabel("close", props.language)}</Button>
      </Box>
    </Box>
  );
}

export default function InstallDialogAction(props) {
  return (
    <>
      <DialogActions>
        {props.platform === platforms.NATIVE && (
          <>
            <Button onClick={props.onClose}>{getLabel("cancel", props.language)}</Button>
            <Button onClick={props.onSubmit} color="primary" variant="contained" disableElevation>
              {getLabel("install", props.language)}
            </Button>
          </>
        )}
        {props.platform === platforms.IDEVICE && (
          <DialogActionWithInstructions
            action1={
              <>
                {getLabel("idevice-action1", props.language)}
                <IOSShareIcon />
              </>
            }
            action2={getLabel("idevice-action2", props.language)}
            onSubmit={props.onSubmit}
            language={props.language}
          />
        )}
        {props.platform === platforms.FIREFOX && (
          <DialogActionWithInstructions
            action1={
              <>
                {getLabel("firefox-action1", props.language)}
                <FireFoxA2HSIcon />
              </>
            }
            action2={getLabel("firefox-action2", props.language)}
            onSubmit={props.onSubmit}
            language={props.language}
          />
        )}
        {props.platform === platforms.FIREFOX_NEW && (
          <DialogActionWithInstructions
            action1={
              <>
                {getLabel("firefox-new-action1", props.language)}
                <MenuIcon />
              </>
            }
            action2={getLabel("firefox-new-action2", props.language)}
            onSubmit={props.onSubmit}
            language={props.language}
          />
        )}
        {props.platform === platforms.OPERA && (
          <DialogActionWithInstructions
            action1={
              <>
                {getLabel("opera-action1", props.language)}
                <MenuIcon />
              </>
            }
            action2={
              <>
                {getLabel("opera-action2", props.language)}
                <OperaA2HSIcon />
              </>
            }
            onSubmit={props.onSubmit}
            language={props.language}
          />
        )}
        {props.platform === platforms.OTHER && (
          <Box width="100%" display="flex" flexDirection="column">
            <Box>{getLabel("notsupported", props.language)}</Box>
            <Box width="100%" textAlign="right">
              <Button onClick={props.onClose}>{getLabel("close", props.language)}</Button>
            </Box>
          </Box>
        )}
      </DialogActions>
    </>
  );
}
