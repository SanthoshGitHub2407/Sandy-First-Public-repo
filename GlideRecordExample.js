// Simple GlideRecord example for ServiceNow
// Query the Incident table for all active incidents and log their number and short description

var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    gs.info('Incident: ' + gr.number + ' - ' + gr.short_description);
}
