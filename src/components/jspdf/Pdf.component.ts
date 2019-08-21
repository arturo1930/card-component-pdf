import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
export default class PDF extends Vue {
  model = {
    dia: "12",
    mes: "Agosto",
    titulo: "Dra.",
    nombre: "María del camen de la Peza Casares",
    noPropuesta: "4",
    tituloPropuesta: "Titulo propuesta"
  };
}
