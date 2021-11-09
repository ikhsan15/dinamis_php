class MyHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <header>
        <a href="index.html"></a>
        <nav>
          <ul>
            <li><a href="index.html"></a></li>
          </ul>
        </nav>
      </header>
    `
  }
}

customElements.define("my-header", MyHeader)