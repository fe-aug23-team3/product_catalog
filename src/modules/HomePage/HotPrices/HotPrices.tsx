import React, { useEffect, useState } from 'react';
import { SliderComponent } from '../../shared/components/SliderComponent';
import { getPhonesWithMaxDiscount } from '../../../utils/fetchClient';
import { Loader } from '../../shared/components/loader';
import { Phone } from '../../../types/Phone';

export const HotPrices: React.FC = () => {
  const [hotModels, setHotModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhonesWithMaxDiscount()
      .then((res) => {
        setHotModels(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <SliderComponent data={hotModels} header="Hot prices" />
    )
  );
};
