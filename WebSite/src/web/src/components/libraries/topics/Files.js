import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Files");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Dealing with files</h2>
            <p>In the cloud era, dealing with files is becoming more and more challenging, as one can no longer rely on a file system to be <i>mounted</i>.
            Developers are instead encouraged to read and write data through services.</p>
            <p>Prompto lets you <code>read</code> and <code>write</code> to files using Urls (using the 'file://' protocol, such as 'file://path/to/some/file.txt')</p>
            <p>This is good enough for dealing with simple scenarios where the file path is known.</p>
            <p>For other situations, Prompto provides a set of methods that let you explore the file system. Obviously, these methods <i>cannot</i> run in a browser.</p>
             <ul>
                <li>
                    <p>
                        <b>listRootPaths</b><br/>
                        This method has the following prototype:<br/>
                        <pre>define listRootPaths as native method returning Text[]</pre>
                        The <i>listRootPaths</i> method returns the list of mounted volumes. Please note that the meaning of this varies greatly between operating systems.
                    </p>
                </li>
                 <li>
                     <p>
                         <b>listChildPaths <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define listChildPaths as native method receiving path returning Text[]</pre>
                         The <i>listChildPaths</i> returns the list of files or directories in a given parent directory or mounted volume.
                     </p>
                 </li>
                <li>
                    <p>
                        <b>pathExists <i>path</i></b><br/>
                        This method has the following prototype:<br/>
                        <pre>define pathExists as native method receiving path returning Boolean</pre>
                        The <i>pathExists</i> method checks whether a file system object exists at a given path.
                    </p>
                </li>
                 <li>
                     <p>
                         <b>pathIsFile <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define pathIsFile as native method receiving path returning Boolean</pre>
                         The <i>pathIsFile</i> method checks whether a file system object exists at a given path and is a file.
                     </p>
                 </li>
                 <li>
                     <p>
                         <b>pathIsDirectory <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define pathIsDirectory as native method receiving path returning Boolean</pre>
                         The <i>pathIsDirectory</i> method checks whether a file system object exists at a given path and is a directory.
                     </p>
                 </li>
                 <li>
                     <p>
                         <b>pathIsLink <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define pathIsLink as native method receiving path returning Boolean</pre>
                         The <i>pathIsLink</i> method checks whether a file system object exists at a given path and is a symbolic link.
                     </p>
                 </li>
                 <li>
                     <p>
                         <b>compressToTempPath <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define compressToTempPath as native method receiving path returning Text</pre>
                         The <i>compressToTempPath</i> method compresses a file located at a given path into a file located in a temporary folder, using gzip compression.
                     </p>
                 </li>
                 <li>
                     <p>
                         <b>decompressToTempPath <i>path</i></b><br/>
                         This method has the following prototype:<br/>
                         <pre>define decompressToTempPath as native method receiving path returning Text</pre>
                         The <i>decompressToTempPath</i> method decompresses a gzip file located at a given path into a raw file located in a temporary folder.
                     </p>
                 </li>
             </ul>

        </React.Fragment>;
    }

}

export default new ThisTopic();