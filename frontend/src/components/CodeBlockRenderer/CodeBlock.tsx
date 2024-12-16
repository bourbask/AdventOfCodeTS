import React from 'react';

import { Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => (
  <Box sx={{ borderRadius: '8px', overflow: 'hidden', boxShadow: 1 }}>
    <SyntaxHighlighter language={language} style={atomOneDark} wrapLines>
      {code}
    </SyntaxHighlighter>
  </Box>
);

export default CodeBlock;
