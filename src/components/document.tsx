import React from 'react';
import { Document as Doc, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
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

// @ts-ignore
const Document = () => {
    return (
        <Doc>
            {/* {slides.map((slide: ISlide) => (
                <Text>{slide.title}</Text>
            ))} */}
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
            </Page>
        </Doc>
    )
}

export default Document;
