import React, { ReactComponentElement, useEffect } from 'react';
import { Page, Text, View, Document as Doc, StyleSheet, Image, Svg } from '@react-pdf/renderer';
import { ISlide, useSlidesContext } from '../context/slidesContext';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Document = () => {
  const { slides } = useSlidesContext();

  return (
    <Doc>
      <Page size="A4" style={styles.page}>
        {(slides || []).map((slide: ISlide) => (
          <View>
          </View>
        ))}

        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Doc>
  )
};

export default Document;