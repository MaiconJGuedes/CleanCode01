function Button () {
  const isFormSubmitting = true

  return (
    <Button disabled = {isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </Button>
  )
}