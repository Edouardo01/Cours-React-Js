render() {
    const { defaultNick, name, placeholder, required } = this.props
    return (
        <p>
            <label>
                Surnom :
                <input
                type="text" 
                defaultValue={defaultNick}
                name={name}
                placeholder={placeholder}
                ref={(field) => { this.nicknameField = field}}
                required={required}
                
                />
            </label>
        </p>
    )
}