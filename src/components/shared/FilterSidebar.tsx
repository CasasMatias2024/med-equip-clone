import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  title: string;
  options: FilterOption[];
}

const filterGroups: FilterGroup[] = [
  {
    id: 'manufacturer',
    title: 'Manufacturer',
    options: [
      { id: 'hologic', label: 'Hologic' },
      { id: 'fujifilm', label: 'Fujifilm' },
      { id: 'ge', label: 'GE Healthcare' },
      { id: 'siemens', label: 'Siemens' },
    ],
  },
  {
    id: 'condition',
    title: 'Condition',
    options: [
      { id: 'new', label: 'New' },
      { id: 'refurbished', label: 'Refurbished' },
    ],
  },
  {
    id: 'modality',
    title: 'Modality',
    options: [
      { id: '3d', label: '3D Mammography' },
      { id: '2d', label: '2D Digital' },
      { id: 'combo', label: '2D/3D Combo' },
    ],
  },
];

export const FilterSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (groupId: string, optionId: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const currentGroup = prev[groupId] || [];
      if (checked) {
        return {
          ...prev,
          [groupId]: [...currentGroup, optionId],
        };
      } else {
        return {
          ...prev,
          [groupId]: currentGroup.filter(id => id !== optionId),
        };
      }
    });
  };

  return (
    <Card className="p-4">
      <h3 className="font-bold text-lg mb-4 text-secondary">Filters</h3>
      
      <Accordion type="multiple" defaultValue={filterGroups.map(g => g.id)} className="w-full">
        {filterGroups.map(group => (
          <AccordionItem key={group.id} value={group.id}>
            <AccordionTrigger className="text-sm font-semibold">
              {group.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {group.options.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${group.id}-${option.id}`}
                      checked={selectedFilters[group.id]?.includes(option.id)}
                      onCheckedChange={(checked) => 
                        handleFilterChange(group.id, option.id, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`${group.id}-${option.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};
