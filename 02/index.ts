const filtrarUsuarios = (
  usuarios: {
    nome: string, idade: number, status: boolean
  }[], usuario: string): {
    nome: string, idade: number, status: boolean
  }[] => {
  const usuariosFiltrados = usuarios.filter(u => {
    return u.nome.toLowerCase().includes(usuario.toLowerCase())
  })

  return usuariosFiltrados
}

const listaUsuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
]

console.log(filtrarUsuarios(listaUsuarios, 'jo'));
