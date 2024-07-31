import { useState } from 'react';

const useAccordion = (initialExpandedSections = []) => {
  const [expandedSections, setExpandedSections] = useState(initialExpandedSections);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const isSectionExpanded = (index) => expandedSections.includes(index);

  return { expandedSections, toggleSection, isSectionExpanded };
};

export default useAccordion;
