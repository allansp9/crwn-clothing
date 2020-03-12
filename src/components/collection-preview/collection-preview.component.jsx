import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  StyledTitle,
  PreviewItem
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <StyledTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </StyledTitle>
    <PreviewItem>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewItem>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
