import React from 'react';

export default function ProfilePage(props) {
  // match is prop sent auto by reacter router: match url to get to page
  const { match } = props;
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          This is the profile page. The profile id is: {match.params.id}
        </div>
        <aside className="col-sm-12 col-lg-4">
          This is the sidebar.
        </aside>
      </div>
    </section>
  );
}
