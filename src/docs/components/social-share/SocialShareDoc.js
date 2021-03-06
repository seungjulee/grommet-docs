// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SocialShare from 'grommet/components/SocialShare';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

SocialShare.displayName = 'SocialShare';

const USAGE =
`import SocialShare from 'grommet/components/SocialShare';
<SocialShare type="twitter" link="http://grommet.io"
  text="User Experience for the Enterprise" />`;

export default class SocialShareDoc extends Component {

  render () {
    return (
      <DocsArticle title="Social Share">

        <section>
          <p>A social media share icon button.</p>
          <SocialShare type="twitter" link="http://grommet.io"
            text="User Experience for the Enterprise" />
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>link         {"{string}"}</code></dt>
            <dd>Link to share.</dd>
            <dt><code>text         {"{string}"}</code></dt>
            <dd>Summary or description of link to be shared. Only valid
              with <code>twitter</code>, <code>linkedin</code>,
              and <code>email</code> type.</dd>
            <dt><code>title        {"{string}"}</code></dt>
            <dd>Title of the link to be shared. Only valid with
              <code>linkedin</code> and <code>email</code> type.</dd>
            <dt><code>type         {"email|facebook|twitter|linkedin|google"}
              </code></dt>
            <dd>Which social network to share link to.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/social-share/examples`}>
            SocialShare Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
