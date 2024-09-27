import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime et animi dolorem sequi dignissimos, consectetur excepturi nisi quas, soluta reiciendis, quos pariatur inventore in commodi repellat fugiat. Corrupti, repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil, ipsam odio nesciunt, unde numquam quos eius rerum facilis ad nemo sint sequi ipsa! Dolorum rem quo quidem ratione asperiores!</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company updates</h2>

      <div className="card">
        <h3>new members of the dev web team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur natus sequi quos totam et qui beatae necessitatibus cum esse repudiandae dolor, incidunt amet voluptatum recusandae nam maxime debitis vel?</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quae distinctio aspernatur doloremque quibusdam error nisi harum! Facilis magnam deleniti, a tempore inventore dicta rem error, architecto nemo dignissimos ut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, commodi eveniet. Id rerum vero similique necessitatibus fuga repellendus, quis quidem omnis rem aperiam quos placeat nam ipsam? Saepe, fugit velit.</p>
      </div>
    </main>
  );
}
