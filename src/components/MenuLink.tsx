import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

import styles from './MenuLink.module.scss';

import { TopLevelMenu as TopLevelMenuModel } from '../model/TopLevelMenu';
import { FlyoutColumn as FlyoutColumnModel } from '../model/FlyoutColumn';
import { Link as LinkModel } from '../model/Link';

export interface IMenuLinkProps {
    item:LinkModel;
}

export interface IMenuLinkState {
}

export class MenuLink extends React.Component<IMenuLinkProps, IMenuLinkState> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IMenuLinkProps> {

       return (
            <Link  
                className={`${styles.link} ms-fontColor-neutralPrimary ms-fontSize-mp`}
                href={this.props.item.url}
                target={this.props.item.openInNewTab ? "_blank" : ""}
            >
                {this.props.item.text}
            </Link>
            );
    }
}
