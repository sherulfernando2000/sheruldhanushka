import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn('heading-1', className)}>{children}</h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn('heading-2', className)}>{children}</h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn('heading-3', className)}>{children}</h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn('heading-4', className)}>{children}</h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className }) => (
  <h5 className={cn('heading-5', className)}>{children}</h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className }) => (
  <h6 className={cn('heading-6', className)}>{children}</h6>
);

// Paragraph Components
export const Paragraph: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('paragraph', className)}>{children}</p>
);

export const ParagraphLarge: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('paragraph-large', className)}>{children}</p>
);

export const ParagraphSmall: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('paragraph-small', className)}>{children}</p>
);

// Typography Demo Component
export const TypographyDemo: React.FC = () => (
  <div className="space-y-8 p-8">
    <div>
      <H1>Heading 1 - Main Title</H1>
      <ParagraphLarge>
        This is a large paragraph that demonstrates the paragraph-large style with Proxima Nova font.
      </ParagraphLarge>
    </div>

    <div>
      <H2>Heading 2 - Section Title</H2>
      <Paragraph>
        This is a regular paragraph that demonstrates the standard paragraph style with Proxima Nova font.
      </Paragraph>
    </div>

    <div>
      <H3>Heading 3 - Subsection</H3>
      <Paragraph>
        Another paragraph to show the consistent typography theme across different heading levels.
      </Paragraph>
    </div>

    <div>
      <H4>Heading 4 - Minor Heading</H4>
      <ParagraphSmall>
        This is a small paragraph demonstrating the paragraph-small style for captions or secondary text.
      </ParagraphSmall>
    </div>

    <div>
      <H5>Heading 5 - Small Heading</H5>
      <ParagraphSmall>
        Small heading with small paragraph text for detailed information.
      </ParagraphSmall>
    </div>

    <div>
      <H6>Heading 6 - Smallest Heading</H6>
      <ParagraphSmall>
        The smallest heading level with corresponding small paragraph text.
      </ParagraphSmall>
    </div>
  </div>
);
