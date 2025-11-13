import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  borderRadius: '1rem !important',
  marginBottom: '1rem',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0 0 1rem 0',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: '1rem 1.5rem',
  '& .MuiAccordionSummary-content': {
    margin: '0.75rem 0',
  },
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0 1.5rem 1.5rem 1.5rem',
}));

export default function FAQAccordion({ faqs }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon className="text-accent" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
}
