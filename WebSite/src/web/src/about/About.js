import React from 'react';

export default class About extends React.Component {

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div className="about" style={style}>
            <h1>The information system in the cloud</h1>

            <h2>Run in the cloud</h2>
            <p>Prompto is designed from the ground to run in the cloud, whether public or private.</p>
            <h3>How is this different from a traditional information system?</h3>
            <p>Many of the technologies currently used to build applications were designed long before the cloud was
                even dreamt of.
                As a consequence, organizations have a hard time building applications for the cloud, and deploying them
                in the cloud.</p>
            <p>Information systems are built from many applications, often dozens, sometimes hundreds of them.
                Making applications work together is a task in itself, proven to be complex even when using simple
                infrastructure.
                While the cloud may simplify some aspects such as hardware provisioning, it can increase the inherent
                complexity of running an information system.
            </p>
            <p>Prompto introduces a radically different approach, where the information system itself is in the cloud.
                This includes all core components of the information system: deployment, load balancing, replication,
                backup,
                monitoring, OS upgrades, DNS, authentication, entitlement and so forth.
            </p>
            <p>While the Prompto technology takes care of infrastructure, security and scalability, the applications
                running within this
                information system can focus on business value.
            </p>

            <h2>Build in the cloud</h2>
            <p>Prompto information systems are entirely built in the cloud. All infrastructure management applications
                are in the cloud.
                All application management applications are in the cloud. All application development applications are
                in the cloud,
                including the IDE for creating web pages and writing application code.</p>


            <h2>Prompto components</h2>
            <p>Prompto comprises different components:</p>
            <ul>
                <li>hardware administration tools, used to manage deployment of applications on the infrastructure
                </li>
                <li>application administration tools, used to monitor execution of applications on the
                    infrastructure
                </li>
                <li>development tools, used to build applications, test them, and manage their lifecycle</li>
                <li>a code store used to store and distribute configuration and application code across the
                    infrastructure
                </li>
                <li>data store adapters, used to store business data in popular distributed data stores</li>
                <li>a programming language, called Prompto</li>
            </ul>

            <h2>Availability</h2>
            <p>Prompto is currently under construction. This web site provides a sneak preview of the Prompto
                programming language,
                which is at the core of the Prompto platform.</p>

        </div>;
    }
}