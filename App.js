import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image style={styles.image}
        source={require('./assets/Foto_perfil.jpeg')}
      ></Image>
      <Text style={styles.textoPagina}>Meu nome é Felipe Cabral de Freitas, tenho 24 anos de idade, sou estudante de ADS, estando agora no momento no 3º período da faculdade, e busco me desenvolver na área de banco de dados.</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
       <Text style={styles.subtitulo}>Perfil Pessoal</Text>
      <Text style={styles.texto}>
Apenas um entusiasta que ama a tecnologia desde pequeno e corre atrás de se desenvolver na área.</Text>
      
      <Text style={styles.subtitulo}>Habilidades</Text>
      <Text style={styles.texto}>
        Figma;
      </Text>
      <Text style={styles.texto}>
        Prototipação;
      </Text>
      <Text style={styles.texto}>
        Oratoria;
      </Text>
      <Text style={styles.texto}>
        Boa comunicação;
      </Text>
      <Text style={styles.texto}>
        Bom relacionamento com equipes;
      </Text>
      


      <Text style={styles.subtitulo}>Experiências</Text>
      <Text style={styles.texto}>
       Lógista;
      </Text>
      <Text style={styles.texto}>
        Financeiro;
      </Text>
      <Text style={styles.texto}>
        Atendimento ao Cliente;
      </Text>
      <Text style={styles.texto}>
        Informática;
      </Text>
      <Text style={styles.texto}>
        Emissão de nota fiscal;
      </Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.subtitulo}>Formação Escolar</Text>
      <Text style={styles.texto}>
        Ensino Médio Completo
      </Text>
      <Text style={styles.texto}>
        Instituição: Escola de Referência Tito Pereira de Oliveira
      </Text>

      <Text style={styles.subtitulo}>Formação Acadêmica</Text>
      <Text style={styles.texto}>
        Curso: Tecnólogo em Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.texto}>
        Instituição: Faculdade Senac Pernambuco
      </Text>
      <Text style={styles.texto}>
        Previsão de Conclusão: Junho de 2025
      </Text>

      <Text style={styles.subtitulo}>Técnico em Telecomunicações</Text>
      <Text style={styles.texto}>
        Curso: Estrutura de rede - FTTH
      </Text>
      <Text style={styles.texto}>
        Instituição: FiberSchool
      </Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 3</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Página 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Página 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Página 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:20,
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 14,
    margin:20,
    textAlign:'center',
  },
  image:{
    width:200,
    height:200,
    marginTop:-100,
    borderRadius:100,
  },
  texto: {
    fontSize: 16,
    marginBottom: 15,
    textAlign:'center',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
