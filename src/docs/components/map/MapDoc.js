// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import GrommetMap from 'grommet/components/Map';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

GrommetMap.displayName = 'Map';

const USAGE =
`import GrommetMap from 'grommet/components/Map';
<GrommetMap data={...} />`;

const DATA = {
  categories: [
    {id: "category-1", label: "First category", items: [
      {id: "item-1-1", node: "First item"},
      {id: "item-1-2", node: "Second item"},
      {id: "item-1-3", node: "Third item"}
    ]},
    {id: "category-2", label: "Second category", items: [
      {id: "item-2-1", node: "Fourth item"},
      {id: "item-2-2", node: "Fifth item"}
    ]},
    {id: "category-3", label: "Third category", items: [
      {id: "item-3-1", node: "Sixth item"},
      {id: "item-3-2", node: "Seventh item"}
    ]}
  ],
  links: [
    {parentId: "item-1-1", childId: "item-2-2"},
    {parentId: "item-1-2", childId: "item-2-2"},
    {parentId: "item-1-2", childId: "item-2-1"},
    {parentId: "item-2-2", childId: "item-3-1"},
    {parentId: "item-2-1", childId: "item-3-2"}
  ]
};

export default class MapDoc extends Component {

  render () {
    return (
      <DocsArticle title="Map" colorIndex="neutral-3">

        <section>
          <p>Shows a graph of nodes and links between them.</p>

          <GrommetMap data={DATA} />
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>data      {"{\n    categories: [{id: , label: , " +
              "items: [id: , node: ]}, ...],\n    " +
              "links: [{parentId: , childId: }, ...]\n}"}</code></dt>
            <dd>An array of objects describing the data.</dd>
            <dt><code>vertical  true|false</code></dt>
            <dd>Whether to orient the map vertically.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/map/examples`}>
            Map Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
