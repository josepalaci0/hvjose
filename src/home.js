export default function Home(data) {
  console.log(data.datos_personales.nombre);
  const imagenes = [
    {
      perfil:
        "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
    }
  ];

  const HV = (
    <>
      <div className={`wrapper cf`}>
        <div className={`content`}>
          <img
            className={`imag_perfil`}
            src={imagenes[0].perfil}
            alt="imagenes"
          />
          <div className={`tarjeta_presentacion`}></div>
        </div>

        <div className={`sidebar`}>
          <h3>Sidebar</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
            fugiat perspiciatis.
          </p>
        </div>
      </div>
    </>
  );
  return HV;
}
