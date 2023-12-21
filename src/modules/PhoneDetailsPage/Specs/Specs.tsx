/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import styles from './Specs.module.scss';
import { PhoneDetail } from '../PhoneDetails/PhoneDetail';
import { PhonesContext } from '../../../store/GlobalProvider';
import { getOnePhone } from '../../../utils/fetchClient';
import { Loader } from '../../shared/components/loader';

export const Specs = () => {
  const [selectedPhoneDetails, setSelectedPhoneDetails]
  = useState<PhoneDetail | null>(null);

  const { phoneItemId } = useContext(PhonesContext);
  const { selectedCapacity } = useContext(PhonesContext);

  useEffect(() => {
    if (!phoneItemId) {
      return;
    }

    getOnePhone(phoneItemId).then((res) => {
      const foundPhone = res.data.find(
        (phone: PhoneDetail) => phone.id === phoneItemId,
      );

      setSelectedPhoneDetails(foundPhone);
    });
  }, [phoneItemId]);

  if (!selectedPhoneDetails) {
    return <Loader />;
  }

  const techSpecs = [
    { name: 'Screen', value: selectedPhoneDetails?.screen },
    { name: 'Resolution', value: selectedPhoneDetails?.resolution },
    { name: 'Processor', value: selectedPhoneDetails?.processor },
    { name: 'RAM', value: selectedPhoneDetails?.ram },
    { name: 'Built in Memory', value: selectedCapacity },
    { name: 'Camera', value: selectedPhoneDetails?.camera },
    { name: 'Zoom', value: selectedPhoneDetails?.zoom },
    { name: 'Cell', value: selectedPhoneDetails?.cell },
  ];

  /// я не ебнулся, это загулшка для мапа

  return (
    <div className={styles.specs_container}>
      <div className={styles.specs_about}>
        <div className={styles.specs_about_header}>
          <h2>About </h2>
        </div>

        {selectedPhoneDetails.description.map((desc) => (
          <section key={desc.id} className={styles.specs_about_section}>
            <h3 className={styles.specs_about_name}>{desc.title}</h3>
            <article className={styles.specs_about_value}>
              {desc.text.join(' ')}
            </article>
          </section>
        ))}
      </div>

      <div className={styles.specs_tech}>
        <div className={styles.specs_tech_header}>
          <h2>Tech specs </h2>
        </div>
        {techSpecs.map((spec) => (
          <section key={spec.name} className={styles.specs_tech_section}>
            <article className={styles.specs_tech_name}>{spec.name}</article>
            <article className={styles.specs_tech_value}>{spec.value}</article>
          </section>
        ))}
      </div>
    </div>
  );
};
