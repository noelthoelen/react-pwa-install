import React from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { platforms } from "./Platforms";
import { getLabel } from "./Translations";
import InstallDialogAction from "./InstallDialogAction";

export default function InstallDialog(props) {
  // Noël: in case we do have a native platform, we do not show the dialog again
  if (props.open && props.platform === platforms.NATIVE) {
    props.onSubmit()
    return  null
  }
  // Noël
  return (
    <Dialog open={props.open} onClose={props.onClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">{props.title || "Install Web App"}</DialogTitle>
      <DialogContent dividers={true}>
        <Box display="flex" alignItems="flex-start">
          {!!props.logo && (
            <Box mr={1}>
              <img src={props.logo} alt="logo" />
            </Box>
          )}
          {!!props.features && (
            <Box>
              <Typography variant="subtitle1">{getLabel("features",props.language, )}</Typography>
              <Typography variant="body2" component="div">
                {props.features}
              </Typography>
            </Box>
          )}
        </Box>
        {!!props.description && (
          <>
            <Typography variant="subtitle1">{getLabel("description",props.language, )}</Typography>
            <Typography variant="body2" component="div">
              {props.description}
            </Typography>
          </>
        )}
      </DialogContent>
      <InstallDialogAction platform={props.platform} onSubmit={props.onSubmit} onClose={props.onClose} language={props.language} />
    </Dialog>
  );
}
