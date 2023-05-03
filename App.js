import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
    Dados pessoais                           >
      </Text>
            <Text style={styles.paragraph}>
    Check-in facebook                      >
      </Text>
     <Text style={styles.paragraph}>
    Planos/serviços                           >
      </Text>
     <Text style={styles.paragraph}>
    Notificações                                >
      </Text>
 --------------------------------------------------
     <Text style={styles.paragraph}>
    Carteira                                       >
      </Text>
           <Text style={styles.paragraph}>
    Histórico de pagamento            >
      </Text>
           <Text style={styles.paragraph}>
    Compras                                      >
      </Text>
      --------------------------------------------------
          <Text style={styles.paragraph}>
    Minha unidade                           >
      </Text>
   <Text style={styles.paragraph}>
    Biblioteca                                    >
      </Text>
       <Text style={styles.paragraph}>
    Treino                                          >
      </Text>
       <Text style={styles.paragraph}>
    Minha agenda                            >
      </Text>
--------------------------------------------------
      <Text style={styles.paragraph}>
    Configurações                            >
      </Text>
            <Text style={styles.paragraph}>
    - Sair do app                               >
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  paragraph: {
    margin: 15,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
