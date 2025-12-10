export function HomePage () {
  return (
    <main>
      <section>
        <img src="./images/background.webp" width="200" alt="" />
        <h1>Encuentra el trabajo de tus sueños</h1>
        <p>
          Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad
        </p>

        <form role="search">
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
              </svg>
              <input type="text" placeholder="Buscar empleos por título, habilidad o empresa" required />
              <button type="submit">Buscar</button>
          </div>
        </form>
      </section>

      <section>
        <header>
          <h2>¿Por qué DevJobs?</h2>
          <p>DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectanos a los
            mejores talentos con las empresa más innovadoras.</p>
        </header>

        <footer>
            <article>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                  class="icon     icon-tabler icons-tabler-outline icon-tabler-briefcase">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3  7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
              <h3>Encuentra el trabajo de tus sueños</h3>
              <p>Busca miles de empleos de las mejores empresas de todo el mundo.</p>
            </article>
            <article>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <h3>Conéctate con las mejores empresas</h3>
              <p>Conéctate con empresas que están contratando por tus habilidades.</p>
            </article>
            <article>
              <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32"
                  xmlns="http://www.w3. org2000svg" aria-hidden="true">
                  <path
                      d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z">
                  </path>
              </svg>
              <h3>Obtén el salário que mereces</h3>
              <p>Obtén el salário que mereces con nuestras calculadoras de salarios.</p>
            </article>
        </footer>
      </section>
    </main>
  )
}