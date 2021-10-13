import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Audit", [  ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Audit</h2>
                    <p>Audit describes the activity of keeping track of changes in stored data.</p>
                    <p>Thanks to its unique data model, Prompto can fully automate this activity when enabled (and supported by the data store).</p>

                    <h3>Audit concepts</h3>

                    <h4>Events</h4>
                    <p>Audit activities are triggered whenever data is <i>created, updated or deleted</i>.</p>
                    <p>Any of these events generates an <i>audit record</i>.</p>

                    <h4>Audit records</h4>
                    <p>Each audit record contains at minimal:</p>
                    <ul>
                        <li>An opaque unique <code>dbId</code></li>
                        <li>A <code>utcTimestamp</code>, the UTC time of the change on the server</li>
                        <li>An <code>operation</code>, one of: INSERT, UPDATE or DELETE</li>
                        <li>An <code>instanceDbId</code>, the opaque reference to the affected data record</li>
                        <li>A <code>metadataDbId</code>, which can be used to retrieve metadata</li>
                    </ul>
                    <p>Optionally, an audit record <i>may</i> contain additional data</p>
                    <ul>
                    </ul>
                    <p>An INSERT audit record also contains:</p>
                    <ul>
                        <li>An <code>instance</code> Document, populated from the stored record</li>
                    </ul>
                    <p>An UPDATE audit record also contains:</p>
                    <ul>
                        <li>An <code>instance</code> Document, populated from the stored record</li>
                        <li>An <code>updatedFields</code> Text[], listing the updated field names</li>
                        <li>A <code>removedFields</code> Text[], listing the removed field names</li>
                    </ul>
                    <p>A DELETE audit record does not contain any record data</p>

                    <h4>Audit metadata</h4>
                    <p>Every <code>delete and store</code> statement is treated as an ACID transaction by Prompto (regardless of the underlying data store capabilities).
                       If audit is enabled, Prompto stores metadata associated with the transaction in the form of a Document.</p>
                    <p>Each audit metadata record contains at minimal:</p>
                    <ul>
                        <li>An opaque unique <code>dbId</code></li>
                        <li>A <code>utcTimestamp</code>, the UTC time of the change on the server</li>
                    </ul>
                    <p>Optionally, an audit metadata record <i>may</i> contain additional data provided as part of the <code>delete and store</code> statement. Here is an example :</p>
                    <pre>delete prospect and store client with &#123; user: "albert" , origin: "phone call" } as metadata</pre>

                    <h4>Audit methods</h4>
                    <p>Storing audit records and audit metadata is automated.</p>
                    <p>Prompto provides the following methods for accessing them:</p>
                    <ul>
                        <li>
                            <p>
                                <b>isAuditEnabled</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define isAuditEnabled as native method returning Boolean</pre>
                                The <i>isAuditEnabled</i> method returns <code>true</code> if audit is enabled <i>and</i> supported by the data store.<br/>
                                As of writing, the following data stores support audit:
                                <ul>
                                    <ul>Mongo (if running as a replica set)</ul>
                                    <ul>Memory (dev only, no persistence)</ul>
                                </ul>
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchLatestAuditRecord</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchLatestAuditRecord as native method receiving DbId dbId returning Document</pre>
                                The <i>fetchLatestAuditRecord</i> method takes as input the dbId of a record and returns the audit record created by the <i>latest</i> transaction affecting the record identified by <i>dbId</i>
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchAllAuditRecords</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchAllAuditRecords as native method receiving DbId dbId returning Document[]</pre>
                                The <i>fetchAllAuditRecords</i> method takes as input the dbId of a record and returns all the audit records affecting the record identified by <i>dbId</i> sorted by utcTimestamp in reverse order
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchAuditRecordsMatching</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchAuditRecordsMatching as native method receiving Document auditPredicates = nothing and Document instancePredicates = nothing returning Document[]</pre>
                                The <i>fetchAuditRecordsMatching</i> method takes as input at least 1 Document providing matching conditions for searching audit record. <br/>
                                If <i>auditPredicates</i> is not null, the method will scan all audit records and retain only those records where , for each key/value pair in auditPredicates, attribute <i>key</i> of the audit record has value <i>value</i>.<br/>
                                If <i>instancePredicates</i> is not null, the method will scan all audit records and retain only those records where , for each key/value pair in instancePredicates, attribute <i>key</i> of the instance attached to the audit record has value <i>value</i>.<br/>
                                This method only supports <i>equals</i> predicates, and they are combined using the <i>and</i> operator.<br/>
                                This method returns the list of <i>Document</i> matching the above predicates.<br/>
                                This method is useful for retrieving audit of deleted records (since there is no dbId to start from). However developers are warned that it involves a full scan which takes linear time with the audit records table size.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>deleteAuditRecord</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define deleteAuditRecord as native method receiving DbId dbId returning Boolean</pre>
                                The <i>deleteAuditMetadata</i> method attempts to permanently delete the audit record identified by <i>dbId</i>, and returns the success status, of <i>false</i> if the record does not exist.
                                Deleting audit data is considered bad engineering practice, this method is only provided for enabling compliance with data privacy requirements such as GDPR.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchLatestAuditMetadataId</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchLatestAuditMetadataId as native method receiving DbId dbId returning DbId</pre>
                                The <i>fetchLatestAuditMetadataId</i> method takes as input the dbId of a record and returns the dbId of the audit metadata attached to the <i>latest</i> transaction affecting the record identified by <i>dbId</i>
                           </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchAllAuditMetadataIds</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchAllAuditMetadataIds as native method receiving DbId dbId returning DbId[]</pre>
                                The <i>fetchAllAuditMetadataIds</i> method takes as input the dbId of a record and returns, for each transaction affecting the record identified by <i>dbId</i>, the dbId of the audit metadata attached to it
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchAuditMetadata</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchAuditMetadata as native method receiving DbId dbId returning Document</pre>
                                The <i>fetchAuditMetadata</i> method takes as input the dbId of an audit metadata record and returns the metadata itself, in the form of a Document
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>deleteAuditMetadata</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define deleteAuditMetadata as native method receiving DbId dbId returning Boolean</pre>
                                The <i>deleteAuditMetadata</i> method attempts to permanently delete the audit metadata record identified by <i>dbId</i>, and returns the success status, of <i>false</i> if the record does not exist.
                                Deleting audit data is considered bad engineering practice, this method is only provided for enabling compliance with data privacy requirements such as GDPR.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>fetchDbIdsAffectedByAuditMetadataId</b><br/>
                                This method has the following prototype:<br/>
                                <pre>define fetchDbIdsAffectedByAuditMetadataId as native method receiving DbId dbId returning DbId[]</pre>
                                The <i>fetchDbIdsAffectedByAuditMetadataId</i> method takes as input the dbId of an audit metadata record and returns the <i>dbId</i> of each record
                                affected by the transaction described by that metadata.
                            </p>
                        </li>
                    </ul>
        </React.Fragment>;
    }

}

export default new ThisTopic();