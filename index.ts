import readline from 'readline';

const LETRAS_FINALES = new Set('cunnilingus'.toLocaleLowerCase().split(''));

interface Encriptador {
  encriptar(frase: string): string;
}

class EncriptadorCunnilingus implements Encriptador {
  encriptar(frase: string): string {
    return frase
      .split(' ')
      .map((p) => {
        const ultimaLetra = p[p.length - 1].toLocaleLowerCase();
        return LETRAS_FINALES.has(ultimaLetra) ? ultimaLetra : 'Cunnilingus';
      })
      .join(' ');
  }
}

function main(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Introduce una frase: ', (t: string) => {
    const encriptador = new EncriptadorCunnilingus();
    console.log('Frase encriptada:', encriptador.encriptar(t));
    rl.close();
  });
}

if (require.main === module) {
  main();
}
