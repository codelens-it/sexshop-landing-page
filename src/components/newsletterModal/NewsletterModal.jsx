import { useEffect, useState } from "react";
import "./newsletterModal.css";

const NewsletterModal = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
        const res = await fetch("https://formspree.io/f/xgvkjegz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name }),
        });

        if (res.ok) {
            setStatus("success");
            localStorage.setItem("newsletter-dismissed", "true");
            setEmail("");
            setName("");
        } else {
            setStatus("error");
        }
        } catch (err) {
        setStatus("error");
        }
    };

    if (!visible) return null;

    return (
        <div className="newsletter-backdrop">
            <div className="newsletter-modal">
                <div className="modal-top">
                    <button className="close-btn" onClick={handleClose}>×</button>
                </div>
                <picture className="modal-image-wrapper">
                    <img src="/slider/bdsm.svg" alt="Promo" className="promo-img" />
                </picture>
                {status === "success" ? (
                <p className="success">¡Gracias por suscribirte!</p>
                ) : (
                <>
                <div className="modal-content">
                        <h3>ÚNETE Y OBTÉN 5% DE DESCUENTO EN TU PRÓXIMA COMPRA</h3>
                        <p>¡Suscríbete para recibir nuestras novedades y descuentos exclusivos!</p>
                        <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={status === "loading"}>
                            {status === "loading" ? "Enviando..." : "Suscribirme"}
                        </button>
                        </form>
                </div>
                    {status === "error" && <p className="error">Hubo un error. Intenta nuevamente.</p>}
                </>
                )}
            </div>
        </div>
    );
};

export default NewsletterModal;
