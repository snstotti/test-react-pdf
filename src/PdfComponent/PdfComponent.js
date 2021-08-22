import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});
// Create styles
const styles = StyleSheet.create({
  page: {
    width: '95%',
    backgroundColor: '#d5e2f5',
    fontFamily: 'Roboto'
  },
  title: {
    // width: '95%',
    margin: 10,
    marginBottom: 50,
    textAlign: 'right',
    padding: 10,
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  content: {
    margin: 10,
    padding: 10,
    marginBottom: 50,
  },
  footer: {
    // width:'95%',
    textAlign: 'right',
    margin: 10,
    padding: 10,
  }
});

// Create Document Component
export const PdfComponent = ({ name, text, data, surname }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>

        <Text>Генеральному директору</Text>
        <Text>ООО "Рога и Копыта"</Text>
        <Text>Иванову И.И</Text>
        <Text>от {name}</Text>

      </View>

      <View style={styles.subTitle}>
        <Text>Заявление</Text>
      </View>

      <View style={styles.content}>
        <Text>{text}</Text>
      </View>

      <View style={styles.footer}>
        <Text>{data}</Text>
        <Text>{surname}</Text>
      </View>

    </Page>
  </Document>
)