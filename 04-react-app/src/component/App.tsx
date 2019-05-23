import * as React from "react";
import { AppBar, Paper, Typography, Toolbar, CircularProgress } from "@material-ui/core";

export default class App extends React.Component<AppLanguageProps & AppThemeProps, AppState> {
    public constructor(props: AppLanguageProps & AppThemeProps) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    public render(): React.ReactNode {
        return (
            <section role="page" lang={this.props.language}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography>My awesome app</Typography>
                    </Toolbar>
                </AppBar>
                <Paper elevation={0} style={{ padding: "1em" }}>
                    <Typography>Loading... <CircularProgress /></Typography>
                </Paper>
            </section>
        );
    }
}

export interface AppLanguageProps {
    language: "en" | "pl";
}

export interface AppThemeProps {
    theme: string;
}

export interface AppState {
    isLoading: boolean;
}
