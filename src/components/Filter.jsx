import { AiOutlineClose } from "react-icons/ai";
import FormGroup from "./FormGroup";
import Select from "./Select";
import Checkbox from "./Checkbox";
function Filter({ close }) {
  return (
    <div className="modal">
      <div className="filter">
        <div className="filter__header">
          <h4>Recherche Avancée</h4>
          <span className="icon" onClick={close}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="filter__content">
          <div className="filter__content--header">
            <FormGroup label="Type">
              <Select>
                <option value="" disabled selected>
                  Choisir un type
                </option>
                <option value="1">Appartement</option>
                <option value="1">Bungalow</option>
                <option value="1">Houses</option>
                <option value="1">Loft</option>
              </Select>
            </FormGroup>
            <FormGroup label="Location">
              <Select>
                <option value="" disabled selected>
                  Choisir une location
                </option>
                <option value="1">Kinshasa</option>
                <option value="1">Maniema</option>
                <option value="1">Goma</option>
                <option value="1">Kindu</option>
              </Select>
            </FormGroup>
            <FormGroup label="Prix" type="range" MIN={100} MAX={1000000} />
            <FormGroup
              label="Année de construction"
              type="range"
              MIN={1996}
              MAX={2023}
            />
            <FormGroup
              label="Surface Terrain (Km)"
              type="range"
              MIN={0}
              MAX={600}
            />
            <FormGroup
              label="zone d'habitation"
              type="range"
              MIN={0}
              MAX={350}
            />
            <FormGroup label="Chambre">
              <Select>
                <option value="" disabled selected>
                  Chambres: Toutes
                </option>
                <option value="1">+1</option>
                <option value="1">+2</option>
                <option value="1">+3</option>
                <option value="1">+4</option>
              </Select>
            </FormGroup>
            <FormGroup label="Garages">
              <Select>
                <option value="" disabled selected>
                  Garages: Tous
                </option>
                <option value="1">+1</option>
                <option value="1">+2</option>
                <option value="1">+3</option>
                <option value="1">+4</option>
              </Select>
            </FormGroup>
            <FormGroup label="Lits">
              <Select>
                <option value="" disabled selected>
                  Lits: Tous
                </option>
                <option value="1">+1</option>
                <option value="1">+2</option>
                <option value="1">+3</option>
                <option value="1">+4</option>
              </Select>
            </FormGroup>
            <FormGroup label="Douches">
              <Select>
                <option value="" disabled selected>
                  Douches: Tous
                </option>
                <option value="1">+1</option>
                <option value="1">+2</option>
                <option value="1">+3</option>
                <option value="1">+4</option>
              </Select>
            </FormGroup>
            <div className="check">
              <label htmlFor="" className="check__label">
                Aménagements
              </label>
              <div className="check__wrapper">
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </div>
            </div>
          </div>
        </div>
        <div className="filter__footer">
          <button>Initialiser les recherches</button>
          <button>Lancer la recherche</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
