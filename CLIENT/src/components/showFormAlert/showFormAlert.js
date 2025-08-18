import Swal from 'sweetalert2'

const showFormAlert = (onSave) => {
  Swal.fire({
    title: 'Actualizar Producto',
    html: `
      <form id="productForm">
        <input type="text" id="title" class="swal2-input" placeholder="Nombre del Producto" required>
          <select id="category" class="swal2-select" required>
          <option value="" disabled selected>Selecciona una Categoría</option>
          <option value="Juegos de Mesa">Juegos de Mesa</option>
          <option value="TCG">TCG</option>
          <option value="Figuras Coleccionables">Figuras Coleccionables</option>
          <option value="Mangas y Cómics">Mangas y Cómics</option>
          <option value="Álbumes y Láminas">Álbumes y Láminas</option>
        </select>
        <input type="text" id="imageUrl" class="swal2-input" placeholder="URL de la Imagen" required>
        <input type="number" id="price" class="swal2-input" placeholder="Precio" required>
        <input type="number" id="stock" class="swal2-input" placeholder="Stock" required>
        <textarea id="description" class="swal2-textarea" placeholder="Descripción" required></textarea>
      </form>
    `,
    confirmButtonText: 'Guardar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const title = Swal.getPopup().querySelector('#title').value
      const category = Swal.getPopup().querySelector('#category').value
      const imageUrl = Swal.getPopup().querySelector('#imageUrl').value
      const price = Number(Swal.getPopup().querySelector('#price').value)
      const stock = Number(Swal.getPopup().querySelector('#stock').value)
      const description = Swal.getPopup().querySelector('#description').value

      if (!title || !category || !imageUrl || !price || !stock || !description) {
        Swal.showValidationMessage('Por favor completa todos los campos')
        return false
      }

      return {
        title,
        category,
        imageUrl,
        price,
        stock,
        description
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      onSave(result.value)
    }
  })
}

export default showFormAlert
